export interface SymptomResult {
  condition: string;
  probability: number;
  urgency: "low" | "moderate" | "high";
  specialist: string;
  advice: string;
}

// Placeholder logic so the Symptom Checker page is fully interactive today.
// Replace with a real call to your AI/ML endpoint, e.g.:
//   const { data } = await apiClient.post("/ai/symptom-check", { symptoms });
export async function analyzeSymptoms(symptoms: string): Promise<SymptomResult[]> {
  await new Promise((r) => setTimeout(r, 1400));
  const text = symptoms.toLowerCase();

  if (text.includes("chest") || text.includes("breath")) {
    return [
      { condition: "Possible cardiac strain", probability: 62, urgency: "high", specialist: "Cardiologist", advice: "Chest pain or breathlessness can be serious. Please seek urgent care or call emergency services if severe." },
      { condition: "Anxiety-related symptoms", probability: 28, urgency: "moderate", specialist: "Mental Health Specialist", advice: "Stress can mimic physical symptoms — worth ruling out with a professional." },
    ];
  }
  if (text.includes("fever") || text.includes("cold") || text.includes("cough")) {
    return [
      { condition: "Viral infection", probability: 71, urgency: "low", specialist: "General Physician", advice: "Rest, fluids, and monitoring are usually enough. See a doctor if fever persists beyond 3 days." },
      { condition: "Seasonal allergies", probability: 24, urgency: "low", specialist: "General Physician", advice: "Consider an antihistamine if symptoms are limited to sneezing and congestion." },
    ];
  }
  if (text.includes("skin") || text.includes("rash") || text.includes("itch")) {
    return [
      { condition: "Contact dermatitis", probability: 58, urgency: "low", specialist: "Dermatologist", advice: "Avoid known irritants and keep the area clean and moisturized." },
    ];
  }
  return [
    { condition: "General discomfort", probability: 45, urgency: "low", specialist: "General Physician", advice: "Based on limited detail, a general physician consultation is a good first step." },
  ];
}
