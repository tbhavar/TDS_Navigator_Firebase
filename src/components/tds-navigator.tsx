'use client';

import React, { useState, useMemo, useEffect } from 'react';
import type { TdsRate } from '@/types';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TdsCard } from './tds-card';
import { Search } from 'lucide-react';

interface TdsNavigatorProps {
  allRates: TdsRate[];
}

export function TdsNavigator({ allRates }: TdsNavigatorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [deductorType, setDeductorType] = useState('all');
  const [deducteeType, setDeducteeType] = useState('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredRates = useMemo(() => {
    return allRates.filter((rate) => {
      const searchMatch =
        rate.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rate.natureOfPayment.toLowerCase().includes(searchQuery.toLowerCase());

      const deductorMatch =
        deductorType === 'all' || rate.deductorTypes.includes(deductorType);

      const deducteeMatch =
        deducteeType === 'all' || rate.deducteeTypes.includes(deducteeType);

      return searchMatch && deductorMatch && deducteeMatch;
    });
  }, [searchQuery, deductorType, deducteeType, allRates]);

  if (!isClient) {
    return null; // Avoids hydration mismatch
  }

  return (
    <div className="space-y-8">
      <div className="p-6 bg-card rounded-lg shadow-md border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Section or Payment..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search by Section or Nature of Payment"
            />
          </div>
          <Select value={deductorType} onValueChange={setDeductorType}>
            <SelectTrigger aria-label="Deductor Type">
              <SelectValue placeholder="Select Deductor Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Deductors</SelectItem>
              <SelectItem value="Individual/HUF">Individual/HUF</SelectItem>
              <SelectItem value="Domestic Company">Domestic Company</SelectItem>
              <SelectItem value="Partnership Firm">Partnership Firm</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </SelectContent>
          </Select>
          <Select value={deducteeType} onValueChange={setDeducteeType}>
            <SelectTrigger aria-label="Deductee Type">
              <SelectValue placeholder="Select Deductee Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Deductees</SelectItem>
              <SelectItem value="Resident">Resident</SelectItem>
              <SelectItem value="Non-Resident">Non-Resident</SelectItem>
              <SelectItem value="Company">Company</SelectItem>
              <SelectItem value="Non-Company">Non-Company</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredRates.length > 0 ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-live="polite"
        >
          {filteredRates.map((rate) => (
            <TdsCard key={rate.id} rate={rate} />
          ))}
        </div>
      ) : (
        <div
          className="text-center py-16 text-muted-foreground"
          aria-live="polite"
        >
          <p className="text-lg">No matching TDS rates found.</p>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
