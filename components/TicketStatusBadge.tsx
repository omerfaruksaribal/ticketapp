import { Status } from '@prisma/client';
import { Badge } from './ui/badge';
import React from 'react';

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: 'bg-red-600' | 'bg-blue-600' | 'bg-green-600' }
> = {
  OPEN: { label: 'Open', color: 'bg-red-600' },
  CLOSED: { label: 'Closed', color: 'bg-green-600' },
  STARTED: { label: 'Started', color: 'bg-blue-600' },
};

const TicketStatusBadge = ({ status }: Props) => {
  return (
    <Badge
      className={`${statusMap[status].color} text-background hover:${statusMap[status].color}`}
    >
      {statusMap[status].label}
    </Badge>
  );
};

export default TicketStatusBadge;
