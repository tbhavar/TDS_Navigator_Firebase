'use client';

import React, { useState, useMemo } from 'react';
import type { TdsRate } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface TdsCardProps {
  rate: TdsRate;
}

export function TdsCard({ rate }: TdsCardProps) {
  const [amount, setAmount] = useState('');

  const tdsAmount = useMemo(() => {
    const numericAmount = parseFloat(amount);
    const rateString = rate.panRequiredRate.match(/(\d+(\.\d+)?)%/);
    if (!rateString || isNaN(numericAmount) || numericAmount <= 0) {
      return '₹0.00';
    }
    const numericRate = parseFloat(rateString[1]);
    const calculatedTds = (numericAmount * numericRate) / 100;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(calculatedTds);
  }, [amount, rate.panRequiredRate]);

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline text-xl">
            Section {rate.section}
          </CardTitle>
          <Badge variant="secondary">{rate.panRequiredRate}</Badge>
        </div>
        <CardDescription>{rate.natureOfPayment}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Threshold:</span>{' '}
            {rate.threshold || 'N/A'}
          </p>
          <p>
            <span className="font-semibold text-foreground">Rate (No PAN):</span>{' '}
            {rate.noPanRate}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-4 bg-muted/50 p-4 rounded-b-lg mt-auto">
        <h4 className="font-semibold font-headline">TDS Calculator</h4>
        <div className="w-full space-y-2">
          <Label htmlFor={`amount-${rate.id}`}>Invoice Amount (₹)</Label>
          <Input
            id={`amount-${rate.id}`}
            type="number"
            placeholder="e.g., 50000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-background"
            aria-label="Invoice Amount"
          />
        </div>
        <div className="text-lg font-bold">
          Calculated TDS:{' '}
          <span className="text-primary" aria-live="polite">
            {tdsAmount}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
