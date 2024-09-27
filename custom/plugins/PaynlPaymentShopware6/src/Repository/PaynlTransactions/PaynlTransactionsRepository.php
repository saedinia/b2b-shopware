<?php declare(strict_types=1);

namespace PaynlPayment\Shopware6\Repository\PaynlTransactions;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityWrittenContainerEvent;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\EntitySearchResult;

class PaynlTransactionsRepository implements PaynlTransactionsRepositoryInterface
{
    /**
     * @var EntityRepository|EntityRepositoryInterface
     */
    private $paynlTransactionsRepository;

    /**
     * @param EntityRepository|EntityRepositoryInterface $paynlTransactionsRepository
     */
    public function __construct($paynlTransactionsRepository)
    {
        $this->paynlTransactionsRepository = $paynlTransactionsRepository;
    }

    /**
     * @param array<mixed> $data
     * @param Context $context
     * @return EntityWrittenContainerEvent
     */
    public function upsert(array $data, Context $context): EntityWrittenContainerEvent
    {
        return $this->paynlTransactionsRepository->upsert($data, $context);
    }

    /**
     * @param array<mixed> $data
     * @param Context $context
     * @return EntityWrittenContainerEvent
     */
    public function create(array $data, Context $context): EntityWrittenContainerEvent
    {
        return $this->paynlTransactionsRepository->create($data, $context);
    }


    /**
     * @param Criteria $criteria
     * @param Context $context
     * @return EntitySearchResult
     */
    public function search(Criteria $criteria, Context $context): EntitySearchResult
    {
        return $this->paynlTransactionsRepository->search($criteria, $context);
    }

    /**
     * @param array<mixed> $data
     * @param Context $context
     * @return EntityWrittenContainerEvent
     */
    public function update(array $data, Context $context): EntityWrittenContainerEvent
    {
        return $this->paynlTransactionsRepository->update($data, $context);
    }
}
