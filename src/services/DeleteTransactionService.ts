import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

// import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepositoy = getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepositoy.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepositoy.remove(transaction);
  }
}

export default DeleteTransactionService;
