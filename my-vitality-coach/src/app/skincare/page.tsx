"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Sun, Droplet, Sparkles } from "lucide-react";
import Link from "next/link";

type SkinType = "oleosa" | "seca" | "mista" | "sensivel" | "normal";
type Sensitivity = "baixa" | "media" | "alta";

interface SkinData {
  skinType: SkinType | "";
  concerns: string[]; // acne, manchas, linhas, poros, ressecamento
  sensitivity: Sensitivity | "";
  sunExposure: "baixa" | "media" | "alta" | "";
  budget: string; // número € por mês
}

export default function SkincarePage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<SkinData>({
    skinType: "",
    concerns: [],
    sensitivity: "",
    sunExposure: "",
    budget: ""
  });
  const [show, setShow] = useState(false);

  const total = 5;
  const progress = (step / total) * 100;

  const next = () => (step < total ? setStep((s) => s + 1) : setShow(true));
  const prev = () => step > 1 && setStep((s) => s - 1);

  const toggleConcern = (key: string) => {
    setData((p) => {
      const has = p.concerns.includes(key);
      return { ...p, concerns: has ? p.concerns.filter((c) => c !== key) : [...p.concerns, key] };
    });
  };

  const makeRoutine = () => {
    const rec: { morning: string[]; night: string[]; tips: string[] } = {
      morning: [],
      night: [],
      tips: []
    };

    // Base por tipo de pele
    switch (data.skinType) {
      case "oleosa":
        rec.morning.push("Gel de limpeza suave", "Hidratante oil-free", "Protetor solar FPS 50");
        rec.night.push("Limpeza suave", "Sérum com niacinamida", "Hidratante leve");
        break;
      case "seca":
        rec.morning.push("Cleanser cremoso", "Hidratante rico com ceramidas", "Protetor solar FPS 50");
        rec.night.push("Cleanser cremoso", "Sérum com ácido hialurônico", "Creme nutritivo");
        break;
      case "mista":
        rec.morning.push("Gel de limpeza", "Hidratante equilibrante", "Protetor solar FPS 50");
        rec.night.push("Limpeza", "Sérum com niacinamida", "Hidratante leve");
        break;
      case "sensivel":
        rec.morning.push("Cleanser sem perfume", "Hidratante calmante", "Protetor solar mineral FPS 50");
        rec.night.push("Limpeza suave", "Sérum calmante (centella)", "Creme reparador");
        break;
      case "normal":
        rec.morning.push("Limpeza suave", "Hidratante leve", "Protetor solar FPS 50");
        rec.night.push("Limpeza", "Sérum antioxidante", "Hidratante");
        break;
    }

    // Preocupações
    if (data.concerns.includes("acne")) {
      rec.night.push("Tratamento pontual com peróxido de benzoíla (2,5%) 2-3x/sem");
      rec.tips.push("Evitar esfoliação agressiva; trocar fronha 2x/sem");
    }
    if (data.concerns.includes("manchas")) {
      rec.morning.push("Vitamina C 10-15%");
      rec.night.push("Ácido azelaico 10% ou retinol (alternar)");
      rec.tips.push("Reaplicar protetor solar a cada 2-3h");
    }
    if (data.concerns.includes("linhas")) {
      rec.night.push("Retinol 0.2-0.5% 2-3x/sem (aumentar gradualmente)");
      rec.morning.push("Antioxidante (Vit C/EGCG)");
    }
    if (data.concerns.includes("poros")) {
      rec.morning.push("Tônico com PHA/BHA leve 2-3x/sem");
      rec.night.push("Niacinamida 4-10%");
    }
    if (data.concerns.includes("ressecamento")) {
      rec.morning.push("Hidratante com ceramidas");
      rec.night.push("Máscara reparadora 2x/sem");
    }

    // Sensibilidade
    if (data.sensitivity === "alta") {
      rec.tips.push("Introduza ativos um de cada vez e faça teste de contato");
      rec.tips.push("Prefira fórmulas sem perfume/álcool e filtros minerais");
    }

    // Exposição solar
    if (data.sunExposure === "alta") {
      rec.tips.push("Protetor solar FPS 50+ em quantidade adequada (2 dedos) e reaplicar");
      rec.tips.push("Usar chapéu/óculos; procurar sombra entre 11h–16h");
    }

    // Orçamento
    const budget = parseFloat(data.budget || "0");
    if (budget && budget < 25) {
      rec.tips.push("Priorize: cleanser + hidratante + protetor solar (o essencial)");
    }

    return rec;
  };

  if (show) {
    const r = makeRoutine();

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
        <header className="bg-white/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar ao Início</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Sua Rotina de Skincare
              </h1>
              <p className="text-gray-600 mt-2">Personalizada para o seu tipo de pele e objetivos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-orange-600" />
                    Manhã
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5 text-sm text-gray-700">
                    {r.morning.map((i, idx) => <li key={idx}>{i}</li>)}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-pink-600" />
                    Noite
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5 text-sm text-gray-700">
                    {r.night.map((i, idx) => <li key={idx}>{i}</li>)}
                  </ul>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-sky-600" />
                    Dicas Gerais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2 list-disc pl-5 text-sm text-gray-700">
                    {r.tips.map((t, idx) => <li key={idx}>{t}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700">
                Guardar Rotina (Premium)
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Quiz de Skincare
            </h1>
            <p className="text-gray-600">Descubra a rotina ideal para a sua pele</p>
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
                <div className="space-y-3">
                  <Label>Qual é o seu tipo de pele?</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["oleosa","seca","mista","sensivel","normal"] as SkinType[]).map((t) => (
                      <label key={t} className={`flex items-center gap-2 rounded-lg border p-3 cursor-pointer ${data.skinType===t ? "border-pink-500 bg-pink-50" : "hover:bg-pink-50/50"}`}>
                        <input
                          type="radio"
                          name="skinType"
                          value={t}
                          checked={data.skinType === t}
                          onChange={(e) => setData((p) => ({ ...p, skinType: e.target.value as SkinType }))}
                        />
                        <span className="capitalize">{t === "sensivel" ? "sensível" : t}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <Label>Principais preocupações</Label>
                  {[
                    ["acne","Acne"],
                    ["manchas","Manchas"],
                    ["linhas","Linhas finas"],
                    ["poros","Poros dilatados"],
                    ["ressecamento","Ressecamento"]
                  ].map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2 rounded-lg border p-3 cursor-pointer hover:bg-pink-50/50">
                      <input
                        type="checkbox"
                        checked={data.concerns.includes(key)}
                        onChange={() => toggleConcern(key)}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <Label>Grau de sensibilidade</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["baixa","media","alta"] as Sensitivity[]).map((s) => (
                      <label key={s} className={`flex items-center gap-2 rounded-lg border p-3 cursor-pointer ${data.sensitivity===s ? "border-pink-500 bg-pink-50" : "hover:bg-pink-50/50"}`}>
                        <input
                          type="radio"
                          name="sensitivity"
                          value={s}
                          checked={data.sensitivity === s}
                          onChange={(e) => setData((p) => ({ ...p, sensitivity: e.target.value as Sensitivity }))}
                        />
                        <span className="capitalize">{s === "media" ? "média" : s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-3">
                  <Label>Exposição ao sol</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["baixa","media","alta"] as const).map((s) => (
                      <label key={s} className={`flex items-center gap-2 rounded-lg border p-3 cursor-pointer ${data.sunExposure===s ? "border-pink-500 bg-pink-50" : "hover:bg-pink-50/50"}`}>
                        <input
                          type="radio"
                          name="sun"
                          value={s}
                          checked={data.sunExposure === s}
                          onChange={(e) => setData((p) => ({ ...p, sunExposure: e.target.value as SkinData["sunExposure"] }))}
                        />
                        <span className="capitalize">{s === "media" ? "média" : s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-3">
                  <Label htmlFor="budget">Orçamento mensal (€) (opcional)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="Ex: 30"
                    value={data.budget}
                    onChange={(e) => setData((p) => ({ ...p, budget: e.target.value }))}
                  />
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={prev} disabled={step === 1}>
                  <ArrowLeft className="h-4 w-4 mr-2" /> Anterior
                </Button>
                <Button onClick={next} className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700">
                  {step === total ? "Ver Rotina" : "Próximo"}
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
