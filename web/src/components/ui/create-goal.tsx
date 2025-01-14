import { X } from "lucide-react";
import { Button } from "./button";
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from "./dialog";
import { Input } from "./input";
import { Label } from "./label";
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from "./radio-group";
import { z } from "zod";
import { Title } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7)
})

export function CreateGoal() {

  const { register, control } = useForm({
    resolver: zodResolver(createGoalForm)
  })

  function hendleCreateGoal(data:any) {
    console.log(data);
    
  }
  return (
    <DialogContent>
      <div className='flex flex-col gap-6 h-full'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className='size-5 text-zinc-600' />
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar praticando toda semana.
          </DialogDescription>
        </div>
        <form action="" className='flex-1 flex flex-col justify-between'>
          <div className='flex flex-col gap-6 '>

            <div className='flex flex-col gap-2'>
              <Label htmlFor='title'> Qual a atividade?</Label>
              <Input 
               id='title' 
               autoFocus 
               placeholder='Praticar exercícios, meditas, etc...'
               {...register('title')}
               />
             
        
                
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor='title'> Quantas vezes na semana?</Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                render={({field}) => {
                  return (
                    <RadioGroup onValueChange={field.onChange} value={field.value}>

                      <RadioGroupItem value='1'>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>
                          1x na semana
                        </span>
                        <span className='text-lg leading-none'>🥱</span>
                      </RadioGroupItem>

                      <RadioGroupItem value='2'>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>
                          2x na semana
                        </span>
                        <span className='text-lg leading-none'>🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value='3'>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>
                          3x na semana
                        </span>
                        <span className='text-lg leading-none'>😎</span>
                      </RadioGroupItem>

                      <RadioGroupItem value='4'>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>
                          4x na semana
                        </span>
                        <span className='text-lg leading-none'>😜</span>
                      </RadioGroupItem>

                      <RadioGroupItem value='5'>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>
                          5x na semana
                        </span>
                        <span className='text-lg leading-none'>🤨</span>
                      </RadioGroupItem>
                      <RadioGroupItem value='6'>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>
                          6x na semana
                        </span>
                        <span className='text-lg leading-none'>🤯</span>
                      </RadioGroupItem>
                      <RadioGroupItem value='7'>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>
                          Todos os dias da semana!
                        </span>
                        <span className='text-lg leading-none'>🔥</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  )
                }}
              />
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <DialogClose asChild>
              <Button className='flex-1' variant='secondary'>Fechar</Button>
            </DialogClose>
            <Button className='flex-1'>Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}