import TicketPriority from '@/components/TicketPriority';
import TicketStatusBadge from '@/components/TicketStatusBadge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Ticket } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

interface Props {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>
                <div className="flex justify-center items-center">Status</div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">Priority</div>
              </TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => (
                  <TableRow key={ticket.id} data-href="/">
                    <TableCell className="flex justify-start">
                      {ticket.title}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketStatusBadge status={ticket.status} />
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex justify-center">
                        <TicketPriority priority={ticket.priority} />
                      </div>
                    </TableCell>
                    <TableCell className="flex justify-between items-center">
                      {ticket.createdAt.toLocaleDateString('tr-TR', {
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: false,
                      })}
                      <Link
                        href={`/tickets/${ticket.id}`}
                        className="ml-4 px-3 py-1 text-sm text-black bg-red-600 rounded-lg hover:bg-red-400 cursor-pointer"
                      >
                        View Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
