import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStripeCheckout } from "@/hooks/stripe/create";
import { useState } from "react";

export function EnrollmentPage() {
  const {mutate , isPending} = useStripeCheckout()
  const [team, setTeam] = useState<string>("")


  function handleconfirm(){
    mutate({name:team})
  }
 
     return (
        
    <div className="my-10 max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl space-y-8">
{/* isso aqui foi criada so de exemplo n leva em conta  */}
      <h1 className="text-3xl font-bold text-center">Inscrição e Criação de Time Fut7</h1>

      <div className="bg-gray-50 p-6 rounded-lg shadow-inner space-y-3 text-gray-700">
        <h2 className="text-xl font-semibold">Termos e Condições</h2>
        <h2 className="text-xl font-semibold"></h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Ao confirmar o pagamento, você cria seu <strong>time exclusivo</strong>.</li>
          <li>Você será indicado como <strong>capitão provisório</strong>.</li>
          <li>Pode editar nome, descrição e foto do time a qualquer momento.</li>
          <li>Pode convidar jogadores e montar sua equipe.</li>
          <li>O time será divulgado no <strong>Mural Público</strong>.</li>
          <li>Pagamento seguro via Stripe.</li>
            <li>
             Opa, meu caro! Só lembrando que isso é um <strong>exemplo para portfólio</strong>. 
            Obrigado por estar vendo meu projeto, fico muito agradecido. Qualquer duvida so chamar 
            </li>
        </ul>
      </div>
{/* isso aqui foi criada so de exemplo n leva em conta  */}

      
 <div className="flex flex-col items-center justify-center gap-4">
        <Input
          onChange={(e) => setTeam(e.target.value)}
          value={team}
          legend="Nome do Time"
          placeholder="Escreva o nome do seu time"
        />
        <Button onClick={handleconfirm} isLoading={isPending}>
          Ir para o Pagamento
        </Button>
      </div>
    </div>
  );
  
}