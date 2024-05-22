import React from 'react';
type EntranceControlModuleProps = {
  maxCapacity?: number;
  entranceBtn?: boolean;
  entranceText?: string;
  exitBtn?: boolean;
  exitText?: string;
};
declare const EntranceControlModule: ({
  maxCapacity,
  entranceBtn,
  exitBtn,
  entranceText,
  exitText,
}: EntranceControlModuleProps) => React.JSX.Element;
export { EntranceControlModule, EntranceControlModuleProps };
