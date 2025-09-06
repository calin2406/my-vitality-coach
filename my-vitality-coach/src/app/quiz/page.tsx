"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Heart, Target } from "lucide-react";
import Link from "next/link";

interface QuizData {
  objetivo: string;
  experiencia: string;
  disponibilidade: string;
  restricoes: string;
  preferencia: string;
}

export default function QuizPage() {
  const [step, setStep] = React.useState<number>(1);
  const [show, setShow] = React.useState<boolean>(false);
  const total = 5;

  const [data, setData] = React.useState<QuizData>({
    objetivo: "",
    experiencia: "",
    disponibilidade: "",
    restricoes: "",
    preferencia: "",
  });

  const progress = (step / total) * 100;

  const update = (k: keyof QuizData, v: string) =>
    setData((prev) => ({ ...prev, [k]: v }));

  const gerarPlano = () => {
    // arrays tipados para evitar 'never[]'
    const treino: string[] = [];
    const nutricao: string[] = [];
    const habitos: string[] = [];

    // objetivo
    if (data.objetivo === "emagrecer") {
      treino.push("Cardio moderado 30–45 min, 4x/semana");
      nutricao.push("Défice de 300–500 kcal/dia");
    } else if (data.objetivo === "ganhar_massa") {
      treino.push("Musculação 4–5x/semana (progressão de carga)");
      nutricao.push("Superávit de 200–300 kcal/dia + 1.6–2.2g proteína/kg");
    } else if (data.objetivo === "saude_geral") {
      treino.push("Mistura de cardio + força 3–4x/semana");
      nutricao.push("Prato equilibrado (proteína, fibra, gorduras boas)");
    }

    // experiência
    if (data.experiencia === "iniciante") {
      treino.push("Full-body 2–3x/semana com técnica simples");
    } else if (data.experiencia === "intermedio") {
      treino.push("Upper/Lower ou Push/Pull/Legs");
    } else if (data.experiencia === "avancado") {
      treino.push("Divisão específica por grupos musculares");
    }

    // disponibilidade
    if (data.disponibilidade === "baixa") {
      habitos.push("Sessões de 25–35 min com foco em compostos");
    } else if (data.disponibilidade === "media") {
      habitos.push("Planeia 4 blocos fixos na semana");
    } else if (data.disponibilidade === "alta") {
      habitos.push("Inclui mobilidade e alongamento extra");
    }

    // restrições
    if (data.restricoes === "lesao") {
      treino.push("Evitar impacto alto; priorizar elíptica/bike e máquinas guiadas");
    } else if (data.restricoes === "alimentar") {
      nutricao.push("Ajusta fontes de proteína/fibra conforme restrição");
    }

    // preferências
    if (data.preferencia === "casa") {
      treino.push("Treinos com peso corporal + bandas elásticas");
    } else if (data.preferencia === "ginásio") {
      treino.push("Aproveita máquinas para progressão controlada");
    } else if (data.preferencia === "exterior") {
      treino.push("Caminhada rápida/corrida intervalada + calisténicos");
    }

    return { treino, nutricao, habitos };
  };

  if (show) {
    const plano = gerarPlano();
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-indigo-50">
        <header className="bg-white/80 backdrop-blur border-b">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar ao Início</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Resultado do Quiz
            </h1>
            <p className="text-gray-600">Plano inicial com base nas tuas escolhas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-pink-600" />
                  Treino
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {plano.treino.map((t, i) => (
                  <div key={i} className="p-2 rounded bg-pink-50 text-sm text-gray-700">{t}</div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-600" />
                  Nutrição
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {plano.nutricao.map((n, i) => (
                  <div key={i} className="p-2 rounded bg-rose-50 text-sm text-gray-700">{n}</div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-indigo-600" />
                  Hábitos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {plano.habitos.map((h, i) => (
                  <div key={i} className="p-2 rounded bg-indigo-50 text-sm text-gray-700">{h}</div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700">
              Guardar Plano (Premium)
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Quiz Rápido
          </h1>
          <p className="text-gray-600">Responde para gerar um plano base</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progresso</span>
            <span>{step} de {total}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Etapa {step}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <Label>Qual é o teu objetivo principal?</Label>
                <RadioGroup value={data.objetivo} onValueChange={(value: string) => update("objetivo", value)}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="obj1" value="emagrecer" />
                    <Label htmlFor="obj1">Emagrecer</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="obj2" value="ganhar_massa" />
                    <Label htmlFor="obj2">Ganhar massa</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="obj3" value="saude_geral" />
                    <Label htmlFor="obj3">Saúde geral</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <Label>Qual o teu nível de experiência?</Label>
                <RadioGroup value={data.experiencia} onValueChange={(value: string) => update("experiencia", value)}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="exp1" value="iniciante" />
                    <Label htmlFor="exp1">Iniciante</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="exp2" value="intermedio" />
                    <Label htmlFor="exp2">Intermédio</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="exp3" value="avancado" />
                    <Label htmlFor="exp3">Avançado</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <Label>Quanto tempo tens disponível?</Label>
                <RadioGroup value={data.disponibilidade} onValueChange={(value: string) => update("disponibilidade", value)}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="disp1" value="baixa" />
                    <Label htmlFor="disp1">Baixa (≤ 3x/semana)</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="disp2" value="media" />
                    <Label htmlFor="disp2">Média (3–4x/semana)</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="disp3" value="alta" />
                    <Label htmlFor="disp3">Alta (5–6x/semana)</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <Label>Tens alguma restrição?</Label>
                <RadioGroup value={data.restricoes} onValueChange={(value: string) => update("restricoes", value)}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="res0" value="" />
                    <Label htmlFor="res0">Não</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="res1" value="lesao" />
                    <Label htmlFor="res1">Lesão</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="res2" value="alimentar" />
                    <Label htmlFor="res2">Alimentar</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <Label>Preferes treinar onde?</Label>
                <RadioGroup value={data.preferencia} onValueChange={(value: string) => update("preferencia", value)}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="pref1" value="casa" />
                    <Label htmlFor="pref1">Em casa</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="pref2" value="ginasio" />
                    <Label htmlFor="pref2">No ginásio</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="pref3" value="exterior" />
                    <Label htmlFor="pref3">Ao ar livre</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>
              <Button
                onClick={() => (step < total ? setStep((s) => s + 1) : setShow(true))}
                className="bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700"
              >
                {step === total ? "Ver Plano" : "Próximo"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
