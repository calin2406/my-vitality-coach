"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight, Target, Dumbbell, Apple } from "lucide-react";
import Link from "next/link";

interface QuizData {
  age: string;
  weight: string;
  height: string;
  targetWeight: string;
  activityLevel: string;
  gender: string;
}

export default function EmagrecimentoPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({
    age: "",
    weight: "",
    height: "",
    targetWeight: "",
    activityLevel: "",
    gender: ""
  });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
    else setShowResults(true);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const updateQuizData = (field: keyof QuizData, value: string) => {
    setQuizData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateBMI = () => {
    const weightNum = parseFloat(quizData.weight || "0");
    const heightNum = parseFloat(quizData.height || "0") / 100;
    if (!weightNum || !heightNum) return "0.0";
    return (weightNum / (heightNum * heightNum)).toFixed(1);
  };

  const generatePlan = () => {
    const currentBMI = parseFloat(calculateBMI());
    const weightToLose =
      (parseFloat(quizData.weight || "0") - parseFloat(quizData.targetWeight || "0")) || 0;

    let calorieDeficit = 500;
    if (weightToLose > 10) calorieDeficit = 750;
    if (weightToLose > 20) calorieDeficit = 1000;

    const bmr =
      quizData.gender === "male"
        ? 88.362 +
          13.397 * parseFloat(quizData.weight || "0") +
          4.799 * parseFloat(quizData.height || "0") -
          5.677 * parseFloat(quizData.age || "0")
        : 447.593 +
          9.247 * parseFloat(quizData.weight || "0") +
          3.098 * parseFloat(quizData.height || "0") -
          4.33 * parseFloat(quizData.age || "0");

    const activityMultiplier =
      {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
      }[quizData.activityLevel] ?? 1.2;

    const dailyCalories = Math.max(1200, Math.round(bmr * activityMultiplier - calorieDeficit));

    return {
      bmi: currentBMI.toFixed(1),
      weightToLose: Math.max(0, Number(weightToLose.toFixed(1))),
      dailyCalories,
      estimatedWeeks: Math.max(1, Math.ceil(weightToLose / 0.5)),
      calorieDeficit
    };
  };

  if (showResults) {
    const plan = generatePlan();

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar ao Início</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Seu Plano de Emagrecimento
              </h1>
              <p className="text-gray-600">Plano personalizado baseado em suas informações</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Análise Corporal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{plan.bmi}</div>
                      <div className="text-sm text-gray-600">IMC Atual</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{plan.weightToLose}kg</div>
                      <div className="text-sm text-gray-600">Para Perder</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{plan.estimatedWeeks} semanas</div>
                    <div className="text-sm text-gray-600">Tempo Estimado</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Apple className="h-5 w-5 text-green-600" />
                    Plano Alimentar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">{plan.dailyCalories}</div>
                    <div className="text-sm text-gray-600">Calorias por Dia</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Café da Manhã</span>
                      <span className="font-semibold">{Math.round(plan.dailyCalories * 0.25)} cal</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Almoço</span>
                      <span className="font-semibold">{Math.round(plan.dailyCalories * 0.35)} cal</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lanche</span>
                      <span className="font-semibold">{Math.round(plan.dailyCalories * 0.15)} cal</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jantar</span>
                      <span className="font-semibold">{Math.round(plan.dailyCalories * 0.25)} cal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-green-600" />
                    Sugestões de Treino
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-600 mb-2">Cardio</h4>
                      <p className="text-sm text-gray-600">30-45 min, 3-4x por semana</p>
                      <p className="text-xs text-gray-500 mt-1">Caminhada, corrida, bike</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-600 mb-2">Musculação</h4>
                      <p className="text-sm text-gray-600">45-60 min, 2-3x por semana</p>
                      <p className="text-xs text-gray-500 mt-1">Fortalecimento muscular</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-600 mb-2">Flexibilidade</h4>
                      <p className="text-sm text-gray-600">15-20 min, diariamente</p>
                      <p className="text-xs text-gray-500 mt-1">Yoga, alongamento</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Salvar Plano (Premium)
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-green-600 hover:text-green-700">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Quiz de Emagrecimento
            </h1>
            <p className="text-gray-600">Responda algumas perguntas para criar seu plano personalizado</p>
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
                Etapa {currentStep}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <Label htmlFor="age">Qual sua idade?</Label>
                  <Input id="age" type="number" placeholder="Ex: 30"
                    value={quizData.age}
                    onChange={(e) => updateQuizData("age", e.target.value)}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <Label>Qual seu gênero?</Label>
                  <RadioGroup
                    value={quizData.gender}
                    onValueChange={(value: string) => updateQuizData("gender", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Masculino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Feminino</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <Label htmlFor="weight">Qual seu peso atual? (kg)</Label>
                  <Input id="weight" type="number" placeholder="Ex: 70"
                    value={quizData.weight}
                    onChange={(e) => updateQuizData("weight", e.target.value)}
                  />
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <Label htmlFor="height">Qual sua altura? (cm)</Label>
                  <Input id="height" type="number" placeholder="Ex: 170"
                    value={quizData.height}
                    onChange={(e) => updateQuizData("height", e.target.value)}
                  />
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-4">
                  <Label htmlFor="targetWeight">Qual seu peso objetivo? (kg)</Label>
                  <Input id="targetWeight" type="number" placeholder="Ex: 65"
                    value={quizData.targetWeight}
                    onChange={(e) => updateQuizData("targetWeight", e.target.value)}
                  />
                </div>
              )}

              {currentStep === 6 && (
                <div className="space-y-4">
                  <Label>Qual seu nível de atividade física?</Label>
                  <RadioGroup
                    value={quizData.activityLevel}
                    onValueChange={(value: string) => updateQuizData("activityLevel", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sedentary" id="sedentary" />
                      <Label htmlFor="sedentary">Sedentário</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light">Leve (1-3x/sem)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderate" id="moderate" />
                      <Label htmlFor="moderate">Moderado (3-5x/sem)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active">Ativo (6-7x/sem)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very_active" id="very_active" />
                      <Label htmlFor="very_active">Muito ativo (2x/dia)</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                  <ArrowLeft className="h-4 w-4 mr-2" /> Anterior
                </Button>
                <Button onClick={handleNext} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  {currentStep === totalSteps ? "Ver Resultados" : "Próximo"}
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
