<template>
  <ContactFancyStyle />
  <div class="contact-style-two">
    <div class="container">
      <div class="contact-info-wrapper">
        <div class="row justify-content-center">
          <!-- -->
          <div class="form-style-classic mt-200 md-mt-80">
            <form @submit.prevent="onSubmit" id="contact-form" data-bs-toggle="validator">
              <div class="messages"></div>
              <div class="row controls">
                <div class="col-md-6" data-aos="fade-right" data-aos-duration="1200">
                  <div class="input-group-meta form-group mb-60">
                    <label>Imię</label>
                    <input type="text" placeholder="Jan" name="Fname" required="required" data-error="Name is required.">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-duration="1200">
                  <div class="input-group-meta form-group mb-60">
                    <label>Nazwisko</label>
                    <input type="text" placeholder="Nowak" name="Lname" required="required"
                      data-error="Name is required.">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
                  <div class="input-group-meta form-group mb-60">
                    <label>Adres e-mail</label>
                    <input type="email" placeholder="twójemail@domena.pl" name="email" required="required"
                      data-error="Valid email is required.">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
                  <div class="input-group-meta form-group lg mb-40">
                    <label>Twoja wiadomość</label>
                    <textarea placeholder="napisz do nas coś tutaj ...." name="message" required="required"
                      data-error="Please,leave us a message."></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
                  <button class="theme-btn-two" style="font-family: Georgia, 'Times New Roman', Times, serif;">Wyślij wiadomość</button></div>
              </div>
            </form>
          </div> <!-- /.form-style-classic -->
          <!-- -->
        </div>
        <img src="../../assets/images/shape/64.svg" alt="" class="shapes shape-one">
        <img src="../../assets/images/shape/65.svg" alt="" class="shapes shape-two">
      </div> <!-- /.contact-info-wrapper -->

      
    </div>
  </div>
</template>

<script>
import ContactFancyStyle from "./contact-fancy-hero.vue";

export default {
  name: 'ContactStyle',
  components: {
    ContactFancyStyle
  },
   methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>