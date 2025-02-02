import { PrismaClientError } from './PrismaClientError';
import { ConflictError } from './conflictError';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target;

    super(`A record with this ${uniqueField} already exists.`);
  }
}
