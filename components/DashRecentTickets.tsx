import { Prisma } from '@prisma/client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';
import TicketStatusBadge from './TicketStatusBadge';
import Link from 'next/link';
import TicketPriority from './TicketPriority';

type TicketWithUser = Prisma.TicketGetPayload<{
  include: { assignedToUser: true };
}>;

interface Props {
  tickets: TicketWithUser[];
}

const DashRecentTickets = ({ tickets }: Props) => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recently Updated</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {tickets
            ? tickets.map((ticket) => (
                <div className="flex items-center" key={ticket.id}>
                  <TicketStatusBadge status={ticket.status} />
                  <div className="ml-6 space-y-1">
                    <Link href={`/tickets/${ticket.id}`}>
                      <p className="text-2xl">{ticket.title}</p>
                      {ticket.assignedToUser?.name ? (
                        <>
                          <span className="text-sm">
                            {ticket.assignedToUser?.name}
                          </span>
                          's ticket
                        </>
                      ) : (
                        <p className="text-sm">Unasigned Ticket</p>
                      )}

                      {}
                    </Link>
                  </div>
                  <div className="ml-auto font-medium">
                    <TicketPriority priority={ticket.priority} />
                  </div>
                </div>
              ))
            : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashRecentTickets;
