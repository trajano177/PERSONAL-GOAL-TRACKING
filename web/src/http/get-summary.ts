import { dataTagSymbol } from "@tanstack/react-query";

type SummaryResponse =  {
  completed: number;
  total: number;
  goalsPerDay: Record<string, {
      id: string;
      title: string;
      completedAt: string;
  }[]
  >;
}


  export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch('http://localhost:3333/summary')
  const data =  response.json()  
  console.log(data);

  if (!response.ok) {
    throw new Error('Failed to fetch summary');
  }
  
}

