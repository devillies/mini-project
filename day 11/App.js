//@flow
import React from 'react';
import {RadioGroup, MyProvider} from './RadioGroup';
type Prop = {
  name: string;
  childer?: Array<React$Element<*>>;
};
function app(prop: Prop) {
  return (
    <div>
      <MyProvider>
        <RadioGroup />
      </MyProvider>
    </div>
  );
}
export default app;
