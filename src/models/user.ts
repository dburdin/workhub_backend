import Joi from "joi";

import { User } from "../types";

export const UserScheme = Joi.object<User>({
  name: Joi.string()
    .min(3)
    .max(20)
    .pattern(
      new RegExp(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    )
    .required(),
  email: Joi.string()
    .email()
    .pattern(
      new RegExp(
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
      )
    )
    .required(),
  phone: Joi.string()
    .pattern(new RegExp(/^[+]{0,1}380([0-9]{9})$/))
    .required(),
  role: Joi.string()
    .valid("Lawyer", "Content manager", "Security", "Designer")
    .required(),
  img: Joi.string().required(),
});
