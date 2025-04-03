import React, { useState } from 'react';

export const Calculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState('');
  const [targetIncome, setTargetIncome] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    if (hoursPerWeek && targetIncome) {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-surface rounded-2xl p-8 border border-white/10 shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-8">
        Quanto Você Poderia Faturar? <span className="text-secondary">(Faça uma Simulação)</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="hours-per-week" className="block text-sm font-medium mb-2">
            Horas por semana dedicadas:
          </label>
          <input
            type="number"
            id="hours-per-week"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            className="w-full p-3 rounded-lg bg-background border border-white/20 text-white"
            placeholder="Ex: 6"
          />
        </div>
        <div>
          <label htmlFor="target-income" className="block text-sm font-medium mb-2">
            Sua meta inicial (R$):
          </label>
          <input
            type="number"
            id="target-income"
            value={targetIncome}
            onChange={(e) => setTargetIncome(e.target.value)}
            className="w-full p-3 rounded-lg bg-background border border-white/20 text-white"
            placeholder="Ex: 3000"
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleCalculate}
          className="btn-secondary"
        >
          Simular Potencial
        </button>
      </div>
      {showResult && (
        <div className="mt-6 p-6 bg-background/50 rounded-lg border border-secondary/50 text-center">
          <p>
            Com <strong>{hoursPerWeek}h/semana</strong>, é realista buscar sua meta de{' '}
            <strong>R${targetIncome}</strong> nos primeiros <strong>45-60 dias</strong>.
          </p>
          <p className="text-sm opacity-70 mt-2">
            (Simulação baseada em casos reais. Depende da sua aplicação.)
          </p>
        </div>
      )}
    </div>
  );
};