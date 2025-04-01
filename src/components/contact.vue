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
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <span>hugotavard@gmail.com</span>
        </strong>
        <strong class="contact-container__details--item__content" @click="callMe">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
                stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
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
          <svg @click="clickContact('https://github.com/htavard')" title="Github" width="50px" height="50px"
            viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path class="cls-1"
                d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5">
              </path>
            </g>
          </svg><span>Github</span>
        </strong>
        <strong class="contact-container__details--item__content"
          @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')">
          <svg @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')" title="Linkedin"
            width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z">
              </path>
              <path
                d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z">
              </path>
              <path
                d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z">
              </path>
            </g>
          </svg><span>Linkedin</span>
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
const nameInput = ref<HTMLElement>()

function focusFirstInput() {
  if (nameInput.value) nameInput.value.focus()
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
      background-color: var(--stylized-text);
      color: var(--background);
      padding: 0.5rem;
      border: 2px solid var(--stylized-text);
      transition: all 0.3s cubic-bezier(.4, 0, .2, 1);

      &:hover {
        background-color: var(--background);
        color: var(--stylized-text);
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
        border-bottom: 2px solid var(--stylized-text);
        font-size: 1rem;
        color: var(--stylized-text);
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

    svg {
      width: 25px;
      height: 25px;
      fill: var(--stylized-text);
    }

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

        input,
        textarea {
          font-size: 13px;
          border-bottom: 2px solid var(--stylized-text);
        }
      }

      &--send {
        font-size: 1.1rem;
      }
    }
  }
}
</style>