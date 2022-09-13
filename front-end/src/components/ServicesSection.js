const ServicesSection = () => {
  return (
    <section className="services py-5 bg-light">
      <div className="container py-5">
        <h1 className="text-center pb-5" style={{ color: "#0e388c" }}>
          Services
        </h1>
        <div className="row pb-3">
          <div className="col-lg-4 mb-3">
            <div className="card text-center card-services py-3">
              <div className="card-body">
                <div className="circle">
                  <span>
                    <i className="fa-solid fa-shirt"></i>
                  </span>
                </div>
              </div>
              <h4 class="font-weight-bold pb-2">Clothes</h4>
              <p style={{color:"#0E123D"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremque, blanditiis reiciendis accusantium voluptatibus unde
                atque tempora cum cupiditate aut eligendi sed dolores, totam
                praesentium iste ex? Eum, placeat esse.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="card text-center card-services py-3">
              <div className="card-body">
                <div className="circle">
                  <span>
                    <i className="fa-solid fa-bowl-food"></i>
                  </span>
                </div>
              </div>
              <h4 class="font-weight-bold pb-2">Food</h4>
              <p style={{color:"#0E123D"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremque, blanditiis reiciendis accusantium voluptatibus unde
                atque tempora cum cupiditate aut eligendi sed dolores, totam
                praesentium iste ex? Eum, placeat esse.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="card text-center card-services py-3">
              <div className="card-body">
                <div className="circle">
                  <span>
                    <i className="fa-sharp fa-solid fa-plug"></i>
                  </span>
                </div>
              </div>
              <h4 class="font-weight-bold pb-2">Electronics</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremque, blanditiis reiciendis accusantium voluptatibus unde
                atque tempora cum cupiditate aut eligendi sed dolores, totam
                praesentium iste ex? Eum, placeat esse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
