import z from "zod";

/**
 * Types shared between the client and server go here.
 *
 * For example, we can add zod schemas for API input validation, and derive types from them:
 *
 * export const TodoSchema = z.object({
 *   id: z.number(),
 *   name: z.string(),
 *   completed: z.number().int(), // 0 or 1
 * })
 *
 * export type TodoType = z.infer<typeof TodoSchema>;
 */

export const ContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactMessageType = z.infer<typeof ContactMessageSchema>;

export const ContactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type ContactResponseType = z.infer<typeof ContactResponseSchema>;
