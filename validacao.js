import Joi, { required } from 'joi';

export const modeloTime = Joi.object({  
    
        nome: Joi.string().min(2).required,
        sigla: Joi.string().length(3).required,
        pontos: Joi.number(),
        vitorias: Joi.number().default(0),
        empates: Joi.number().default(0),
        derrotas: Joi.number().default(0),
        golsMarcados: Joi.number().default(0),
        golsSofridos: Joi.number().default(0),
        saldoDeGols: Joi.number().default(0),
   
})
export const modeloAtualizaçaoTime = Joi.object({     
        nome: Joi.string().min(2),
        sigla: Joi.string().length(3),
        pontos: Joi.number(),
        vitorias: Joi.number(),
        empates: Joi.number(),
        derrotas: Joi.number(),
        golsMarcados: Joi.number(),
        golsSofridos: Joi.number(),
        saldoDeGols: Joi.number(),   
}).min(1);
