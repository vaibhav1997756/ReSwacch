// import React from 'react'
// import { useState } from 'react';

// const Hooks = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//       setCount(count + 1);
//     };
//     const decrement = () => {
//         setCount(count - 1);
//       };
//   return (
//     <div style={{marginTop:"200px"}}>
//     <p>Count: {count}</p>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//   </div>
//   )
// }

// export default Hooks


// import React, { useState } from 'react';
// import { evaluate } from 'mathjs'
// import './Hooks.css';

// const Hooks = () => {
//   const [result, setResult] = useState('');

//   const handleClick = (e) => {
//     setResult(result.concat(e.target.name));
//   };

//   const clear = () => {
//     setResult('');
//   };
//   const calculate = () => {
//     // try {
//     //    setResult(eval(result).toString()); 
//     // } catch (error) {
//     //    setResult('Error');
//     // }
    
//       // try {
//       //   const calculationFunction = new Function('return ' + result);
//       //   setResult(calculationFunction().toString());
//       // } catch (error) {
//       //   setResult('Error');
//       // }

//       try {
//         setResult(evaluate(result).toString());
//       } catch (error) {
//         setResult('Error');
//       }
//   };

//   return (
//     <div className="calculator">
//       <input type="text" value={result} />
//       <div className="keypad">
//         <button className="highlight" onClick={clear} id="clear">Clear</button>
//         <button name="(" onClick={handleClick}>(</button>
//         <button name=")" onClick={handleClick}>)</button>
//         <button name="/" onClick={handleClick}>/</button>
//         <button name="7" onClick={handleClick}>7</button>
//         <button name="8" onClick={handleClick}>8</button>
//         <button name="9" onClick={handleClick}>9</button>
//         <button name="*" onClick={handleClick}>*</button>
//         <button name="4" onClick={handleClick}>4</button>
//         <button name="5" onClick={handleClick}>5</button>
//         <button name="6" onClick={handleClick}>6</button>
//         <button name="-" onClick={handleClick}>-</button>
//         <button name="1" onClick={handleClick}>1</button>
//         <button name="2" onClick={handleClick}>2</button>
//         <button name="3" onClick={handleClick}>3</button>
//         <button name="+" onClick={handleClick}>+</button>
//         <button name="0" onClick={handleClick}>0</button>
//         <button name="." onClick={handleClick}>.</button>
//         <button className="highlight" onClick={calculate} id="result">=</button>
//       </div>
//     </div>
//   );
// };

// export default Hooks;


// import React, { useRef } from 'react';
// import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

// const ComponentToPrint = () => {
//   return <div>Hello World
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora aspernatur obcaecati ullam hic explicabo perspiciatis molestias alias qui. Officiis cum eaque quibusdam perferendis delectus voluptates odit itaque optio rem voluptate.
//       Eligendi, quo sed. Quos unde sint dignissimos veniam exercitationem, ea sed dolores iure veritatis voluptas ut reiciendis labore dolor pariatur autem inventore expedita, provident recusandae! Laboriosam minima ullam maxime. Sit?
//       Odit, cupiditate repellendus. Autem expedita sed beatae minima ipsum, accusantium corrupti laborum reiciendis unde. Aliquam amet nihil qui. Modi quos voluptatum id neque inventore eos molestiae magnam provident dignissimos maiores.
//       Voluptas quibusdam laudantium, illo nisi aliquam laborum nihil expedita veritatis itaque ad quis? Cumque animi et quo quaerat? Eos ratione dolorum ipsa dignissimos, voluptate quasi soluta eaque consequuntur alias odit!
//       Laborum placeat facilis quasi vero molestiae alias inventore fuga sequi? Unde autem molestias voluptas nam odit perspiciatis accusantium repellendus quidem aspernatur, possimus libero sequi ab natus accusamus ea odio maxime?
//       Iusto, vel. Non facilis, quo dolore culpa dolores in. Consequuntur facere aspernatur optio rem ab accusantium ea fuga natus beatae, rerum nihil ipsa iste temporibus repellendus quaerat mollitia sit officia!
//       Quasi explicabo adipisci tenetur voluptatem vero officiis, molestias voluptatum aut voluptatibus? Voluptatum voluptatem illum eaque! Animi, quia quas labore officiis dolorem perspiciatis, temporibus, eveniet doloribus beatae iste eum? Quo, consectetur.
//       Non modi quaerat eveniet fuga deserunt facilis error illum adipisci? Illum itaque possimus quasi quae mollitia nobis, saepe fugit architecto, id sed perspiciatis cupiditate, eligendi consequatur. Consequatur repellendus dolores corrupti.
//       Ratione amet neque id blanditiis at, repudiandae, nesciunt facilis placeat consectetur recusandae repellat nisi, maiores exercitationem iste! Facilis, totam fuga? Officiis, odit molestiae architecto vero pariatur magnam ipsa obcaecati velit.
//       Amet mollitia quod explicabo perferendis. Iusto quibusdam, magnam nam deleniti impedit deserunt veritatis laudantium molestiae. Nemo libero iste, quos necessitatibus in ipsam deleniti eius pariatur maiores hic blanditiis molestiae ullam!
//       Esse placeat numquam debitis sunt, itaque eius repellat hic quod maiores dolorem veritatis, corrupti cupiditate in est aliquam atque dignissimos molestiae nulla ipsum. Id corporis est nisi accusantium fuga consequuntur!
//       Natus, ad! Quidem, praesentium non, dignissimos, delectus soluta at accusamus quibusdam eaque voluptatibus et placeat rerum. Nam blanditiis cumque culpa incidunt quia nesciunt? Dolore reiciendis natus ab porro soluta maiores.
//       Aspernatur vitae similique voluptas animi rem, voluptates eligendi praesentium tempora atque ipsum nesciunt in unde minus provident optio blanditiis quos reiciendis. Optio dolor labore corrupti itaque natus. Inventore, enim sint!
//       Ex ad quae porro at accusamus dolores nihil, excepturi laboriosam veniam, esse earum recusandae alias nobis eligendi vero et obcaecati, quasi repudiandae placeat omnis illum delectus autem velit? Magnam, nemo!
//       Id incidunt voluptatum, illo, delectus animi facilis, ea dicta autem doloribus ducimus expedita iste accusamus. Inventore nesciunt at officiis quis qui repellat, libero doloribus cumque fugiat enim tempore, natus similique!
//       Voluptate, explicabo! Natus necessitatibus soluta, optio velit autem voluptatibus consectetur, facilis laborum quam repellendus ipsam corporis? Iusto perspiciatis nobis sequi accusamus alias eum qui ipsa inventore accusantium. Pariatur, earum voluptatum!
//       Accusantium eos illum excepturi quibusdam dolore recusandae nihil asperiores eveniet, earum quas explicabo quod suscipit, facilis inventore delectus! Fugit illum id tempore, itaque atque impedit dicta autem molestiae perspiciatis magni?
//       Consectetur accusantium sit nisi recusandae dolores repellat iure laborum iste ducimus aspernatur, excepturi aut libero officia. Mollitia nesciunt temporibus, eveniet qui magnam modi saepe iure nulla doloribus quis hic vel.
//       Dolorum doloremque exercitationem, suscipit temporibus ipsum inventore sit debitis placeat hic laborum quas. Ab, earum expedita voluptas fuga voluptatem adipisci nulla corrupti beatae, deleniti sint accusamus hic vel nihil cupiditate.
//       Quia itaque harum cumque quo? Ipsum laboriosam libero nesciunt! Aliquid, nihil in? Quisquam sapiente, praesentium aliquid fugiat repellendus ipsam cumque a animi doloribus facere nostrum libero, omnis alias assumenda blanditiis.
//       Cumque ea necessitatibus dolorum quia consectetur culpa dolores nam cupiditate velit, perspiciatis odit fugit omnis rerum voluptas nesciunt vero atque? Delectus magni voluptatibus unde ea quisquam similique labore fugit sunt.
//       Sapiente iste mollitia sequi! Aliquid quasi assumenda architecto. Eveniet, rerum blanditiis molestias et expedita quisquam repudiandae aspernatur! Debitis veritatis, molestiae officia voluptatem atque cumque, dolorem, corrupti magnam obcaecati corporis hic.
//       Deserunt, fugit quasi officia magnam enim mollitia facere molestiae veritatis repellat esse. Commodi quo eos libero perspiciatis totam voluptatibus explicabo odio maiores quod, aut sequi officia autem. Velit, veniam doloribus.
//       Rerum aspernatur libero dolorum soluta impedit ab eveniet quas suscipit, doloribus quia accusamus ex! Quis voluptas non tenetur aperiam distinctio, quia hic similique veniam ad reiciendis commodi nisi aut quo?
//       Atque, sit officiis? Inventore, quia necessitatibus? Quasi est quae quo impedit quam accusamus cumque modi neque ipsa iure nihil error officiis, dolores facere cupiditate esse sapiente odit voluptatum totam et.
//       Fugiat voluptatem, ipsa sunt optio impedit, iusto delectus assumenda dolor deleniti omnis neque. Facere nihil voluptates reprehenderit quis earum iusto, cum pariatur qui, quia, fuga fugit? Provident nulla minima commodi?
//       Totam magni inventore distinctio aliquid error libero voluptate facilis quasi, obcaecati sequi, odit animi labore perspiciatis consequuntur aspernatur at cum ipsum neque. Exercitationem, quae officia consequuntur magnam deserunt cum aliquid.
//       Quae voluptate rem doloribus sapiente quo, illum aperiam iste qui laudantium perferendis asperiores et labore id mollitia excepturi, repellendus ad, hic cumque quia nobis laborum veniam ducimus. Voluptatum, iste fuga.
//       Ducimus inventore ipsa, id, sapiente facere minus soluta cum voluptatibus vero quia nobis dignissimos? Velit quo fugit earum modi reiciendis? Veritatis neque odit debitis vel, libero quam repudiandae tempore ab!
//       Sapiente quisquam aut rerum. Laboriosam incidunt voluptas, temporibus, adipisci a aspernatur nemo magni nesciunt doloremque odit ducimus, labore consequuntur itaque quibusdam earum ratione! Assumenda voluptatibus quo dignissimos, commodi culpa minima.
//       Eos enim natus necessitatibus, obcaecati, expedita perspiciatis, numquam recusandae voluptate voluptas ea quo autem. Quas perferendis nisi ea deserunt dolores eum voluptatum magni nesciunt facilis, eius esse accusantium ipsam cumque.
//       Rem pariatur quasi nam cum voluptates natus, architecto saepe inventore minus exercitationem doloremque nostrum temporibus incidunt! Quasi, consectetur! Nobis molestias in dignissimos voluptates, maiores sit et. Commodi explicabo rem esse.
//       Nihil aut, mollitia asperiores illo, ad odit suscipit, possimus libero officia doloribus quae. Ex dolor nulla velit nobis inventore quos qui aut vitae alias repellendus. Nobis minima ipsum eos inventore.
//       Quae, reprehenderit dolorum nobis quia facere nostrum itaque. Iure dolore nam praesentium modi temporibus adipisci doloremque laborum quibusdam, exercitationem facilis maiores tempore soluta asperiores a esse blanditiis perspiciatis deleniti hic.
//       Atque explicabo vel veniam non placeat! Doloribus, earum? Molestias non deserunt recusandae, sit, voluptates eius hic omnis earum animi tempora, laborum dicta facere? Quidem fugiat nulla nobis eligendi voluptatum. Animi?
//       Necessitatibus adipisci hic eos cumque doloremque, dolorem quod! Possimus nobis ipsam culpa, soluta totam, quos in recusandae repellendus ducimus animi error dolorem laborum. Iusto a, ducimus esse numquam ab laudantium!
//       Tempora consectetur quidem architecto, molestiae corporis error quia accusantium. Dicta odit repudiandae officia quibusdam beatae adipisci aliquam, amet, alias maiores similique, nulla quam velit expedita aspernatur voluptatem praesentium illo eos.
//       Culpa, quae nostrum? Dolore perspiciatis voluptatum exercitationem minus debitis esse, est in nam incidunt nostrum recusandae totam? Totam labore ab explicabo! Quo enim unde suscipit dicta eos deserunt temporibus beatae?
//       Fugit laborum labore similique facilis non debitis iste veniam optio! Accusantium, sunt facilis aliquam reprehenderit in adipisci? Obcaecati consequuntur illum iure consequatur vitae minima, eveniet cum excepturi, labore ratione amet.
//       Quos mollitia dolorem assumenda et similique doloremque quae quaerat, harum error quidem, perferendis facilis? Quidem itaque explicabo sint repudiandae nam amet cupiditate iure, voluptas hic accusamus eveniet totam quam excepturi.
//       Excepturi temporibus amet, tempore dignissimos dicta provident vel necessitatibus sunt alias asperiores laborum dolore inventore unde, eligendi quis maiores sint voluptatibus illum quam ipsum incidunt nam, nulla explicabo! Ducimus, ipsum.
//       Perspiciatis veritatis iusto aspernatur sed consectetur! Sed porro, in debitis aut quibusdam error eaque ipsa dolore magni esse ex, cupiditate amet? Voluptates reiciendis vitae, soluta quos molestias molestiae quis nisi.
//       Deleniti, cupiditate repellendus, perspiciatis similique eum ipsa iste ea ratione aliquid placeat aliquam nesciunt assumenda voluptas, et ut voluptatibus natus. Deleniti id ipsam quod aliquam. Eos quia voluptates aspernatur enim.
//       Incidunt consequatur tenetur molestias autem molestiae libero. Voluptatem commodi, eaque obcaecati perferendis ullam et beatae debitis, veniam ex neque natus recusandae! Eveniet repudiandae labore laboriosam, inventore doloribus ab hic eos.
//       Esse, nihil fugit sed voluptate assumenda earum vel, dicta id commodi repudiandae reiciendis nemo distinctio, minima ea. Rerum pariatur, consectetur hic autem commodi est doloribus sunt? Rem fugiat fugit animi?
//       Vel, odit itaque ullam modi repudiandae amet hic illo distinctio voluptates et cupiditate nobis, in rem! Nulla et beatae, doloribus ipsum assumenda delectus tenetur obcaecati magni ipsam, labore fuga? Dolore!
//       Aspernatur, ex expedita nam consequuntur error dolorem et porro quos consectetur, suscipit, soluta temporibus eaque voluptatibus atque reiciendis ducimus incidunt. Aliquid vitae delectus natus rerum modi, repudiandae fugit ab nemo.
//       Tempore ullam rerum explicabo voluptates atque pariatur! Aperiam laudantium ducimus aliquid, vero omnis temporibus corporis nostrum reprehenderit tempora ad maiores optio distinctio quam! Odio porro nisi hic aspernatur, obcaecati ipsam.
//       Magni quam, temporibus omnis corporis qui excepturi alias iure. Ab iure dolores at laboriosam atque corrupti, ipsum veritatis corporis necessitatibus? Blanditiis sed, cumque tempore doloribus a repellat quo nulla odio.
//       Error quasi repellendus culpa maiores! Libero voluptatum dolorum ipsum dicta eos minima incidunt cum. Iusto ad accusamus aspernatur! Autem, quaerat? Velit sint, unde facere eum id commodi odio nulla rerum!
//       Fugiat unde, commodi nemo tempora, obcaecati velit voluptatum ex eum corporis quae minima dicta nihil, et quos saepe qui non sed perferendis cum deserunt pariatur! Fugiat unde ea numquam molestiae?
//       Eum placeat, nostrum officia commodi asperiores doloremque non quam laborum sed, dignissimos sint aliquid, quis impedit dolores autem odio nihil eveniet blanditiis architecto illo deserunt. Perspiciatis dolores autem vero? Repudiandae.
//       Recusandae molestiae dolor voluptatibus expedita? Fugiat cupiditate ullam, voluptatum debitis incidunt voluptate natus minus, distinctio illo nesciunt dolorum, cumque ex. Laborum aliquam aspernatur officia blanditiis a animi! Repellendus, maiores ullam?
//       Veritatis suscipit maiores atque deleniti ex, quasi, ad nulla sed sit dicta nemo quisquam recusandae fugit voluptates. Quos ea doloribus, dolorem itaque rem earum commodi, cum esse reprehenderit impedit at!
//       Dignissimos temporibus earum amet, aut repellat alias similique odit delectus vero nemo in. Ex nostrum nemo dolores optio ratione dolorem, voluptate laborum quas modi aspernatur sint eligendi. Repellendus, illum consectetur.
//       Vel tenetur maxime sapiente minima doloremque. Eius amet accusamus doloribus similique repellendus ex molestiae ea aut deserunt cupiditate architecto repudiandae ab quo voluptate vitae, suscipit possimus. A veniam laborum quaerat!

//       </p>
//   </div>;
// };

// const Hooks = () => {
//    const nodeRef = useRef(null);



//   const handleExportJPEG = () => {
//     exportComponentAsJPEG(nodeRef);
//   };

//   const handleExportPDF = () => {
//     exportComponentAsPDF(nodeRef);
//   };

//   const handleExportPNG = () => {
//     exportComponentAsPNG(nodeRef);
//   };

//   return (
    
//     <div className='png'>
    
//       <ComponentToPrint ref={nodeRef} />
//       <button onClick={handleExportJPEG}>
//         Export As JPEG
//       </button>
//       <button onClick={handleExportPDF}>
//         Export As PDF
//       </button>
//       <button onClick={handleExportPNG}>
//         Export As PNG
//       </button>
//       </div>
   
//   );
// };

// export default Hooks;






import React, { useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      Hello World
      <p className='content' style={{fontSize:"27px",marginLeft:"40px",marginRight:"40px",color:"blue"}}> Hello World,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex non rerum fuga veniam molestias atque, soluta vero rem quas! Assumenda at fugiat iste eos eius a molestiae laborum rem enim?
      Inventore odio temporibus, quaerat vel omnis soluta officiis odit aliquam praesentium optio rerum quos delectus dolorem ea a qui. Aut optio vero animi aspernatur incidunt, amet magnam quaerat ipsum et.
      Fugiat modi sit iusto minima magni debitis est incidunt ab ex! Minima adipisci, odio corrupti tempore officiis iusto enim vel, sunt nulla qui temporibus! Mollitia earum magni explicabo possimus nostrum?
      Esse, quibusdam aperiam! Aut illo repudiandae eligendi eius, a voluptatem facilis neque harum voluptates ipsam qui, debitis fugit similique aliquid, libero quidem praesentium! Odio quisquam iure tenetur asperiores saepe dolorem?
      Enim adipisci eveniet officia voluptate repellat consequatur, facere esse quasi earum inventore voluptas! Quisquam, nulla obcaecati iusto doloremque soluta rem consequuntur culpa molestias animi ex labore hic quia quis quidem.
      Maxime ex itaque temporibus deleniti, dolores odit molestiae maiores. Debitis soluta totam at ex earum voluptatibus perspiciatis assumenda officia quisquam minima animi eos ea iure, quod minus ut aut quis?
      Nesciunt iusto iure, ut provident, optio culpa voluptate ratione doloremque dignissimos, odio omnis numquam. Et molestias exercitationem dicta aliquid, atque amet nisi inventore magni repudiandae natus quo sed nemo mollitia!
      Eveniet eius minima et corporis vel est repellendus, odit recusandae necessitatibus laudantium, adipisci similique ut unde libero ullam animi sed saepe nostrum culpa consequuntur corrupti error inventore sint? Mollitia, fuga.
      Cumque dolor nulla delectus sapiente accusamus deserunt eaque nihil numquam, quibusdam in. Fuga iusto quaerat asperiores voluptas molestias. Accusantium, tempore omnis! Soluta atque quam dolores maiores odit reiciendis tempore minima.
      Dignissimos animi ea doloremque rem. Molestiae exercitationem iusto et nobis reiciendis consequatur eius eaque ipsam, blanditiis consequuntur omnis rerum sit veniam enim, error accusantium quos dolore ullam! Sit, adipisci voluptatem.
      Eveniet accusamus a nihil maiores deserunt ducimus voluptates minus animi! Saepe, voluptates nulla iusto quo ullam tempora doloribus nobis perferendis, ipsam minima harum quisquam magnam iure optio impedit delectus ducimus?
      Adipisci ad consectetur reprehenderit ea inventore quam et non qui assumenda, repudiandae hic nihil aliquam quasi optio nisi ipsam dolores minima corporis provident veniam voluptatum, vitae dolorem distinctio excepturi. Culpa.
      Recusandae esse perferendis repellendus quod modi! Nulla aut id iste qui earum, doloremque reprehenderit, ratione, eius incidunt repudiandae temporibus hic nesciunt laboriosam praesentium eligendi excepturi laudantium tenetur beatae? Ipsa, eaque.
      Sed, nobis velit! Et sequi ut aperiam repellendus numquam incidunt qui illo modi, voluptatibus sunt omnis aspernatur atque. Obcaecati illo labore cumque eligendi vero, possimus nostrum eaque? Nostrum, illo neque.
      Distinctio reiciendis ipsam voluptates, delectus facilis numquam facere praesentium alias deserunt, ratione neque velit voluptatem non perferendis fugit quisquam voluptatum adipisci inventore aliquid. Atque sed aspernatur incidunt alias doloremque sequi!
      Labore quisquam error quam quos ullam praesentium rem! Nesciunt quam cum, eos laudantium officia ipsa quis numquam a rerum, dolores, asperiores sapiente maiores! Sed laborum ducimus inventore illum rem aliquid!  Natus quod impedit alias obcaecati, laboriosam tempora cumque adipisci iusto nulla magni id a accusantium ratione repellat saepe autem labore placeat nemo aliquam provident earum quos sapiente. Autem, ipsum mollitia!
       </p> 
    </div>
  );
});

const Hooks = () => {
  const nodeRef = useRef(null);

  const handleExportJPEG = () => {
    exportComponentAsJPEG(nodeRef);
  };

  const handleExportPDF = () => {
    exportComponentAsPDF(nodeRef,{});
  };

  const handleExportPNG = () => {
    exportComponentAsPNG(nodeRef, { html2CanvasOptions: { scale: 3 } }); // Adjust scale as needed
  };

  return (
    <div className='png'>
      <ComponentToPrint ref={nodeRef} />
      <button onClick={handleExportJPEG}>Export As JPEG</button>
      <button onClick={handleExportPDF}>Export As PDF</button>
      <button onClick={handleExportPNG}>Export As PNG</button>
    </div>
  );
};

export default Hooks;

