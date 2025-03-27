<template>
  <div class="contact-container">
    <form class="contact-container__form" @submit.prevent="sendMailNoWindow">
      <div class="contact-container__form--field">
        <label>{{ $t('yourName') }}
          <input v-model="name" type="text" :placeholder="$t('placeholderName')" ref="nameInput" />
        </label>
      </div>

      <div class="contact-container__form--field">
        <label>{{ $t('yourEmail') }}
          <input v-model="email" type="email" :placeholder="$t('placeholderEmail')" />
        </label>

      </div>
      <div class="contact-container__form--field">
        <label>{{ $t('yourMessage') }}
          <textarea v-model="message" :placeholder="$t('placeholderMessage')"> </textarea>
        </label>
      </div>

      <button class="contact-container__form--send" type="submit">{{ $t('send') }}</button>
    </form>
    <div class="contact-container__details">
      <div class="contact-container__details--item">
        <h3 class="contact-container__details--item__title">{{ $t('contactDetails') }}</h3>
        <strong class="contact-container__details--item__content" @click="sendMail">
          <img src="../assets/pictures/email.png" width="20px" height="20px" />
          <span>hugotavard@gmail.com</span>
        </strong>
        <strong class="contact-container__details--item__content" @click="callMe">
          <img src="../assets/pictures/icons/phone-flip.png" width="20px" height="20px" />
          <span>+33 7 86 43 41 02</span>
        </strong>
      </div>

      <div class="contact-container__details--item">
        <h3 class="contact-container__details--item__title">{{ $t('location') }}</h3>
        <strong class="contact-container__details--item__content"
          @click="clickContact('https://www.google.fr/maps/place/Bordeaux')">
          Bordeaux, France
        </strong>
      </div>

      <div class="contact-container__details--item">
        <h3 class="contact-container__details--item__title">{{ $t('socials') }}</h3>
        <strong class="contact-container__details--item__content" @click="clickContact('https://github.com/htavard')">
          <img src="../assets/pictures/icons/github.png" width="20px" height="20px" /><span>Github</span>
        </strong>
        <strong class="contact-container__details--item__content"
          @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')">
          <img src="../assets/pictures/icons/linkedin.png" width="20px" height="20px" /><span>Linkedin</span>
        </strong>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import emailjs from '@emailjs/browser';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const name = ref<string>('')
const email = ref<string>('')
const message = ref<string>('')
const nameInput = ref(null)

function focusFirstInput() {
  nameInput.value.focus()
}

defineExpose({
  focusFirstInput,
})

function sendMail() {
  window.location.href = `mailto:hugotavard@gmail.com`;
}

function callMe() {
  window.location.href = `tel:+33786434102`
}

function sendMailNoWindow() {
  if (!name.value || !email.value || !message.value) {
    alert(t('sendFormVerif'))
    return
  }

  try {
    emailjs.send(
      'service_p132d9n',
      'template_wvsekkn',
      {
        user_name: name.value,
        user_email: email.value,
        message: message.value
      },
      'hA0fg8iQMPaV9hKfs'
    )
    alert(t('sendFormAccept'))
    name.value = ''
    email.value = ''
    message.value = ''

  } catch (error) {
    console.error('Error sending email:', error)
    alert('Failed to send email. Try again later.')
  }
}


function clickContact(link: string) {
  window.open(link, "_blank")
}
</script>

<style lang='scss' scoped>
.contact-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;

  &__form {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 6vh;
    padding-right: 10%;
    overflow: hidden;

    &--send {
      font-size: 1.4rem;
      border: none;
      border-radius: 5vw;
      background-color: #4A2C2A;
      color: #F9E0BB;
      padding: 0.5rem;
      border: 2px solid #4A2C2A;
      transition: all 0.3s cubic-bezier(.4, 0, .2, 1);

      &:hover {
        background-color: #F9E0BB;
        color: #4A2C2A;
        transition: all 0.3s cubic-bezier(.4, 0, .2, 1);
      }
    }

    &--field {
      display: flex;

      label {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5vh;
        font-weight: 500;
        font-size: 1.25rem;
        text-transform: uppercase;
      }

      input,
      textarea {
        border: none;
        background-color: transparent;
        border-bottom: 2px solid #4A2C2A;
        font-size: 1rem;
        color: #4A2C2A;
      }

      textarea {
        min-height: 5vh;
      }

      input:focus,
      textarea:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }

  &__details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 20vh;

    &--item {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &__content {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font-weight: 400;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .contact-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    font-size: 12px;
    
    &__details {
      padding-bottom: 4rem;

      &--item {
        gap: 5px;
        line-height: 12px;
      }
    }

    &__form {
      width: 100%;

      &--field {
        label {
          font-size: 16px;
          gap: 1rem;
        }

        input, textarea {
          font-size: 13px;
          border-bottom: 2px solid #4A2C2A;
        }
      }

      &--send {
        font-size: 1.1rem;
      }
    }
  }
}
</style>