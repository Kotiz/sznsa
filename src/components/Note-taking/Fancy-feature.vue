<template>
  <div class="fancy-feature-fifteen pt-120 md-pt-80" id="product">
    <div class="bg-wrapper">
      <div class="container">
        <div class="sldier-wrapper">
          <div
            id="screenSlider"
            class="carousel slide"
            data-bs-ride="carousel"
            data-interval="200000"
          >
            <div class="row">
              <div class="col-lg-8 m-auto">
                <ol class="carousel-indicators justify-content-between">
                  <li
                    data-bs-target="#screenSlider"
                    data-bs-slide-to="0"
                    class="active"
                  >
                    <div class="d-flex align-items-center">
                      <img src="../../assets/images/icon/90.svg" alt="" />
                      <p>Team Box</p>
                    </div>
                  </li>
                  <li data-bs-target="#screenSlider" data-bs-slide-to="1">
                    <div class="d-flex align-items-center">
                      <img src="../../assets/images/icon/91.svg" alt="" />
                      <p>Project & Task</p>
                    </div>
                  </li>
                  <li data-bs-target="#screenSlider" data-bs-slide-to="2">
                    <div class="d-flex align-items-center">
                      <img src="../../assets/images/icon/92.svg" alt="" />
                      <p>Note & Docs</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div class="carousel-inner mt-60 sm-mt-40">
              <div class="carousel-item active">
                <img
                  src="../../assets/images/assets/screen_11.png"
                  alt=""
                  class="m-auto"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/images/assets/screen_15.png"
                  alt=""
                  class="m-auto"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/images/assets/screen_16.png"
                  alt=""
                  class="m-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- /.sldier-wrapper -->
      </div>
      <img
        src="../../assets/images/shape/168.svg"
        alt=""
        class="shapes shape-one"
      />
      <img
        src="../../assets/images/shape/169.svg"
        alt=""
        class="shapes shape-two"
      />
    </div>
    <!-- /.bg-wrapper -->
  </div>
</template>

<script>
export default {
  name: "FancyFeature",
};
</script>
