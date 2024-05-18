import React, { useState } from 'react';

import {Dice} from './Dice';
import { CovidRes } from './CovidRes';

const App=()=>
  {
    const [pro,setPro]=useState<string>('')

    return <div>
      <CovidRes></CovidRes>
      <Dice></Dice>
  
    </div>
  }
  export  default App;
