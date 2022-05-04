import React from 'react';

const MenuCard = ({MenuData }) => {
//console. log(MenuData);
  return(

   <>
   <section className="main-card--cointainer">
   
   {MenuData.map((curElem ) => {
   const {id,  name,  category, image, discription }  = curElem ; 

    return(
        <>
        <div className="card-container" key={id}>
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle suble">
                    {id}
                </span>
                <span className="card-author subtle">{name}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-discription subtle">
                "  A great restaurant is one that just makes you feel like you're not sure whether you went out or you came home and confuses you.If it can do both of those things at the same time, you're hooked.",

                {discription}
                </span>
                <div className="card-read">Read</div>
                </div>
                 <img src={image} alt="images" className="card-media" />
                <span className="card-tag subtle">Order now</span>"
                    </div>
                </div>
                </>
    );
        
    })}   

</section>

</>
  );
};

export default MenuCard;
