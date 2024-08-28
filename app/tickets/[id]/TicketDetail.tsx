import React, { useState } from 'react';
import { Ticket } from '@prisma/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TicketStatusBadge from '@/components/TicketStatusBadge';
import TicketPriority from '@/components/TicketPriority';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import ReactMarkDown from 'react-markdown';
import DeleteButton from './DeleteButton';

interface Props {
  ticket: Ticket;
}

const TicketDetail = ({ ticket }: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <Card className="mx-4 mb-4 lg:col-span-3 lg:mr-4">
        <CardHeader>
          <div className="flex justify-between mb-3">
            <TicketStatusBadge status={ticket.status} />
            <TicketPriority priority={ticket.priority} />
          </div>
          <CardTitle>{ticket.title}</CardTitle>
          <CardDescription>
            Ticket Created At:{' '}
            {ticket.createdAt.toLocaleDateString('tr-TR', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
              hour: 'numeric',
              minute: '2-digit',
              hour12: false,
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ReactMarkDown className="prose dark:prose-invert">
            {ticket.description}
          </ReactMarkDown>
        </CardContent>
        <CardFooter className="text-sm">
          Ticket Updated At:{' '}
          {ticket.updatedAt.toLocaleDateString('tr-TR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
          })}
        </CardFooter>
      </Card>
      <div className="mx-5 flex lg:flex-col lg:mx-0 gap-2 justify-center">
        <Link
          href="/tickets"
          className={`${buttonVariants({ variant: 'destructive' })}`}
        >
          Tickets Page
        </Link>
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={`${buttonVariants({ variant: 'destructive' })}`}
        >
          Edit Ticket
        </Link>
        <DeleteButton ticketId={ticket.id} />
      </div>
    </div>
  );
};

export default TicketDetail;
