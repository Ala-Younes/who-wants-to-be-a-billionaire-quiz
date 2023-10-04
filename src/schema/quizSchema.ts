import { z } from "zod";

const answerSchema = z.object({
  text: z.string(),
  correct: z.boolean(),
});

const questionSchema = z.object({
  id: z.number(),
  question: z.string(),
  answers: z.array(answerSchema),
});
const dataSchema = z.array(questionSchema);

const pyramidMoneyObject = z.object({
  id: z.number(),
  amount: z.string(),
});

const pyramidMoneySchema = z.array(pyramidMoneyObject);

type QuestionAnswerType = z.infer<typeof dataSchema>;
type pyramidMoneyType = z.infer<typeof pyramidMoneySchema>;
type AnswerType = z.infer<typeof answerSchema>;

export {
  type QuestionAnswerType,
  type pyramidMoneyType,
  type AnswerType,
  dataSchema,
};
