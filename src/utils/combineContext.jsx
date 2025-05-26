export default function combineContext(...providers){
     /**
      * this combines the multiple context provider together and returns a single context
      */
     return({ children }) => {
      return providers.reduceRight((accumulator, Currentprovider) => {
            return <Currentprovider>{accumulator}</Currentprovider>
      }, children /*  Initial value */ );
     }
}


/**
 * <A>
 *   <B>
 *     <C>
 *       
 */