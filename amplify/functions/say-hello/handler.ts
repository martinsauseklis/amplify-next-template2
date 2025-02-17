import type { Handler } from 'aws-lambda';
import { Schema } from '../../data/resource';

export const handler: Schema["sayHello"]["functionHandler"] = async (event, context) => {
  const { name } = event.arguments
  // your function code goes here
  return `Hello, ${name}!`
};