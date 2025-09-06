"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Leaf, Moon, Zap, Droplets, Brain, Heart } from "lucide-react";
import Link from "next/link";

interface LifestyleData {
  sleepHours: string;
  sleepQuality: string;
  stressLevel: string;
  waterIntake: string;
  energyLevel: string;
}

type Reco = {
  sleep: string[];
  stress: string[];
  hydration: string[];
  energy: string[];
  habits: string[];
};

export default function LifestylePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [lifestyleData, setLifestyleData] = useState<LifestyleData>({
    sleepHours: "",
    sleepQuality: "",
    stressLevel: "",
    waterIntake: "",
    energyLevel: ""
  });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
    else setShowResults(true);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const updateLifestyleData = (field: keyof LifestyleData, value: string) => {
    setLifestyleData((prev) => ({ ...prev, [field]: value }));
  };

  const generateRecommendations = (): Reco => {
    const { sleepHours, sleepQuality, stressLevel, waterIntake, energyLevel } = lifestyleData;

    const recommendations: Reco = {
      sleep: [],
      stress: [],
      hydration: [],
      energy: [],
      habits: []
    };

    // Sono
    if (parseInt(sleepHours) < 7) {
      recommendations.sleep.push("Aumente gradualmente seu tempo de sono para 7-9 horas");
      recommendations.sleep.push("Estabeleça um horário fixo para dormir e acordar");
    }
    if (sleepQuality === "poor") {
      recommendations.sleep.push("Evite telas 1 hora antes de dormir");
      recommendations.sleep.push("Mantenha o quarto escuro e fresco (18-21°C)");
      recommendations.sleep.push("Pratique técnicas de relaxamento antes de dormir");
    }

    // Stress
    if (stressLevel === "high" || stressLevel === "very_high") {
      recommendations.stress.push("Pratique meditação por 10-15 minutos diariamente");
      recommendations.stress.push("Faça exercícios de respiração profunda");
      recommendations.stress.push("Considere atividades como yoga ou tai chi");
      recommendations.stress.push("Organize suas tarefas e prioridades");
    }

    // Hidratação
    if (waterIntake === "low" || waterIntake === "very_low") {
      recommendations.hydration.push("Aumente gradualmente sua ingestão de água");
      recommendations.hydration.push("Mantenha uma garrafa de água sempre por perto");
      recommendations.hydration.push("Configure lembretes para beber água");
    }

    // Energia
    if (energyLevel === "low" || energyLevel === "very_low") {
      recommendations.energy.push("Faça refeições balanceadas a cada 3-4 horas");
      recommendations.energy.push("Inclua proteínas em todas as refeições");
      recommendations.energy.push("Pratique exercícios leves regularmente");
      recommendations.energy.push("Considere suplementação de vitamina D");
    }

    // Hábitos gerais
    recommendations.habits.push("Exponha-se à luz solar pela manhã");
    recommendations.habits.push("Pratique gratidão diariamente");
    recommendations.habits.push("Mantenha conexões sociais saudáveis");
    recommendations.habits.push("Reserve tempo para hobbies e lazer");

    return recommendations;
  };

  const calculateWellnessScore = () => {
    let score = 0;
    if (parseInt(lifestyleData.sleepHours) >= 7) score += 20;
    if (["excellent", "good"].includes(lifestyleData.sleepQuality)) score += 20;
    if (["low", "very_low"].includes(lifestyleData.stressLevel)) score += 20;
    if (["adequate", "high"].includes(lifestyleData.waterIntake)) score += 20;
    if (["high", "very_high"].includes(lifestyleData.energyLevel)) score += 20;
    return score;
  };

  if (showResults) {
    const recommendations = generateRecommendations();
    const wellnessScore = calculateWellnessScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <header className="bg-white/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar ao Início</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Seu Plano de Bem-Estar
              </h1>
              <p className="text-gray-600">Recomendações personalizadas para uma vida mais saudável</p>
            </div>

            <Card className="mb-8">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Seu Score de Bem-Estar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {wellnessScore}%
                </div>
                <Progress value={wellnessScore} className="h-4 mb-4" />
                <p className="text-gray-600">
                  {wellnessScore >= 80
                    ? "Excelente! Continue assim!"
                    : wellnessScore >= 60
                    ? "Bom! Algumas melhorias podem ajudar."
                    : wellnessScore >= 40
                    ? "Moderado. Há espaço para melhorias."
                    : "Precisa de atenção. Vamos trabalhar juntos!"}
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="h-5 w-5 text-indigo-600" />
                    Sono & Descanso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recommendations.sleep.map((tip, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    Gestão do Stress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recommendations.stress.map((tip, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-blue-600" />
                    Hidratação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recommendations.hydration.map((tip, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-600" />
                    Energia & Vitalidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recommendations.energy.map((tip, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    Hábitos Saudáveis Diários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {recommendations.habits.map((habit, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{habit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Salvar Plano (Premium)
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quiz de Saúde & Lifestyle
            </h1>
            <p className="text-gray-600">Avalie seus hábitos para receber recomendações personalizadas</p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progresso</span>
              <span>{currentStep} de {totalSteps}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-blue-600" />
                Etapa {currentStep}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <Label>Quantas horas você dorme por noite?</Label>
                  <RadioGroup
                    value={lifestyleData.sleepHours}
                    onValueChange={(value: string) => updateLifestyleData("sleepHours", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="sleep4" />
                      <Label htmlFor="sleep4">Menos de 5 horas</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6" id="sleep6" />
                      <Label htmlFor="sleep6">5-6 horas</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="7" id="sleep7" />
                      <Label htmlFor="sleep7">7-8 horas</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="9" id="sleep9" />
                      <Label htmlFor="sleep9">Mais de 8 horas</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <Label>Como você avalia a qualidade do seu sono?</Label>
                  <RadioGroup
                    value={lifestyleData.sleepQuality}
                    onValueChange={(value: string) => updateLifestyleData("sleepQuality", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="poor" id="poor" />
                      <Label htmlFor="poor">Ruim (acordo cansado, sono interrompido)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fair" id="fair" />
                      <Label htmlFor="fair">Regular (às vezes acordo cansado)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="good" id="good" />
                      <Label htmlFor="good">Bom (geralmente acordo descansado)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="excellent" id="excellent" />
                      <Label htmlFor="excellent">Excelente (sempre acordo revigorado)</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <Label>Qual seu nível de stress no dia a dia?</Label>
                  <RadioGroup
                    value={lifestyleData.stressLevel}
                    onValueChange={(value: string) => updateLifestyleData("stressLevel", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very_low" id="stress_very_low" />
                      <Label htmlFor="stress_very_low">Muito baixo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="stress_low" />
                      <Label htmlFor="stress_low">Baixo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderate" id="stress_moderate" />
                      <Label htmlFor="stress_moderate">Moderado</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="stress_high" />
                      <Label htmlFor="stress_high">Alto</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very_high" id="stress_very_high" />
                      <Label htmlFor="stress_very_high">Muito alto</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <Label>Quanta água você bebe por dia?</Label>
                  <RadioGroup
                    value={lifestyleData.waterIntake}
                    onValueChange={(value: string) => updateLifestyleData("waterIntake", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very_low" id="water_very_low" />
                      <Label htmlFor="water_very_low">Menos de 1 litro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="water_low" />
                      <Label htmlFor="water_low">1-1.5 litros</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="adequate" id="water_adequate" />
                      <Label htmlFor="water_adequate">2-2.5 litros</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="water_high" />
                      <Label htmlFor="water_high">Mais de 3 litros</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-4">
                  <Label>Como está seu nível de energia durante o dia?</Label>
                  <RadioGroup
                    value={lifestyleData.energyLevel}
                    onValueChange={(value: string) => updateLifestyleData("energyLevel", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very_low" id="energy_very_low" />
                      <Label htmlFor="energy_very_low">Muito baixo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="energy_low" />
                      <Label htmlFor="energy_low">Baixo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderate" id="energy_moderate" />
                      <Label htmlFor="energy_moderate">Moderado</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="energy_high" />
                      <Label htmlFor="energy_high">Alto</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very_high" id="energy_very_high" />
                      <Label htmlFor="energy_very_high">Muito alto</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Anterior
                </Button>
                <Button onClick={handleNext} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  {currentStep === totalSteps ? "Ver Recomendações" : "Próximo"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
