<template>
  <div class="home">

    <!--USER -->
    <div class="chat">
      <div class="chat__head">
        <img src="../assets/logo.jpg" alt="">
        <div class="title">Рабочий чат (День: {{ day }})</div>
      </div>
      <div class="chat__body">
        <ul class="messages"
            v-chat-scroll="{always: false, smooth: true, scrollonremoved:true, smoothonremoved: false}">
          <li class="message" v-for="m in messages" v-bind:class="{ me: m.me }">
            <div class="text" v-html="m.message" v-bind:class="{ me: m.me }"></div>
          </li>
        </ul>
      </div>
      <div class="chat__footer">
        <template v-if="day === 1">
          <template v-if="userStage === 0">
            <button v-on:click="sendUserMsg('Да')" class="half">Да</button>
            <button v-on:click="sendUserMsg('Нет')" class="half">Нет</button>
          </template>
          <template v-if="userStage === 2">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
            <button v-on:click="sendMessage('5', true, 1)" class="half">5</button>
          </template>
          <template v-if="userStage === 3">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
          </template>
          <template v-if="userStage === 4">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
          </template>
          <template v-if="userStage === 5">
            <button v-on:click="sendMessage('Да', true, 1)" class="half">Да</button>
            <button v-on:click="sendMessage('Нет', true, 1)" class="half">Нет</button>
          </template>
          <template v-if="userStage === 6">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
            <button v-on:click="sendMessage('5', true, 1)" class="half">5</button>
          </template>
          <template v-if="userStage === 7">
            <button v-on:click="nextDey" class="full">Перейти на новый день</button>
          </template>
        </template>

        <template v-if="day===2">
          <template v-if="userStage === 2">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
          </template>
          <template v-if="userStage === 3">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
            <button v-on:click="sendMessage('5', true, 1)" class="half">5</button>
            <button v-on:click="sendMessage('6', true, 1)" class="half">6</button>
          </template>
          <template v-if="userStage === 4">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
          </template>
          <template v-if="userStage === 5">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
            <button v-on:click="sendMessage('5', true, 1)" class="half">5</button>
          </template>
          <template v-if="userStage === 6">
            <input type="text" v-model="msg">
            <button v-on:click="sendMessage(msg, true, 1)" class="half">Отправить</button>
          </template>
          <template v-if="userStage === 7">
            <button v-on:click="nextDey" class="full">Перейти на новый день</button>
          </template>
        </template>


        <template v-if="day === 3">
          <template v-if="userStage === 2">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
          </template>
          <template v-if="userStage === 3">
            <button v-on:click="sendMessage('Да', true, 1)" class="half">Да</button>
            <button v-on:click="sendMessage('Нет', true, 1)" class="half">Нет</button>
          </template>
          <template v-if="userStage === 4">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
            <button v-on:click="sendMessage('5', true, 1)" class="half">5</button>
          </template>
          <template v-if="userStage === 5">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
          </template>
          <template v-if="userStage === 6">
            <button v-on:click="sendMessage('Да', true, 1)" class="half">Да</button>
            <button v-on:click="sendMessage('Нет', true, 1)" class="half">Нет</button>
          </template>
          <template v-if="userStage === 7">
            <button v-on:click="nextDey" class="full">Перейти на новый день</button>
          </template>
        </template>

        <template v-if="day === 4">
          <template v-if="userStage === 2">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
            <button v-on:click="sendMessage('5', true, 1)" class="half">5</button>
          </template>
          <template v-if="userStage === 3">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
            <button v-on:click="sendMessage('5', true, 1)" class="half">5</button>
          </template>
          <template v-if="userStage === 4">
            <input type="text" v-model="msg">
            <button v-on:click="sendMessage(msg, true, 1)" class="half">Отправить</button>
          </template>
          <template v-if="userStage === 5">
            <button v-on:click="nextDey" class="full">Перейти на новый день</button>
          </template>
        </template>

        <template v-if="day === 5">
          <template v-if="userStage === 2">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
            <button v-on:click="sendMessage('4', true, 1)" class="half">4</button>
            <button v-on:click="sendMessage('5', true, 1)" class="half">5</button>
            <button v-on:click="sendMessage('6', true, 1)" class="half">6</button>
          </template>
          <template v-if="userStage === 4">
            <button v-on:click="sendMessage('1', true, 1)" class="half">1</button>
            <button v-on:click="sendMessage('2', true, 1)" class="half">2</button>
            <button v-on:click="sendMessage('3', true, 1)" class="half">3</button>
          </template>
          <template v-if="userStage === 5">
            <button v-on:click="sendMessage('Да', true, 1)" class="half">Да</button>
            <button v-on:click="sendMessage('Нет', true, 1)" class="half">Нет</button>
          </template>
          <template v-if="userStage === 6">
            <input type="text" v-model="msg">
            <button v-on:click="sendMessage(msg, true, 1)" class="half">Отправить</button>
          </template>
          <template v-if="userStage === 7">
            <button v-on:click="nextDey" class="full">Вернуться в начало</button>
          </template>
        </template>

      </div>
    </div>
    <!--НАСТАВНИК-->
    <div STYLE="display: none" class="chat">
      <div class="chat__head">
        <img src="../assets/rosatom-2.png" alt="">
        <div class="title">Оповещения</div>
      </div>
      <div class="chat__body">
        <ul class="messages"
            v-chat-scroll="{always: false, smooth: true, scrollonremoved:true, smoothonremoved: false}">
          <li class="nothing" v-if="messages2.length === 0">
            <!--                        <div class="text">Сначала нужно пройти опрос в чате слева</div>-->
          </li>
          <li class="message" v-for="m in messages2" v-bind:class="{ me: m.me }">
            <div class="text" v-html="m.message" v-bind:class="{ me: m.me, err: m.err }"></div>
          </li>
        </ul>
      </div>
      <div class="chat__footer">
        <template v-if="userStage === 6">
          <input type="date" v-model="msg">
          <button class="date" v-on:click="sendMessage('', true,2)">Отправить</button>
          <button v-on:click="sendMessage('3', true,2)" class="four"></button>
          <button v-on:click="sendMessage('5', true,2)" class="four">5</button>
          <button v-on:click="sendMessage('7', true,12)" class="four">7</button>
          <button v-on:click="sendMessage('10', true,2)" class="four">10</button>
        </template>
        <template v-if="userStage === 7 || userStage ===8 || userStage === 9">
          <button v-on:click="sendMessage(n, true,2)" v-for="n in 10" class="teen">{{ n }}</button>
        </template>
        <template v-if="userStage === 10">
          <button v-on:click="sendMessage('Менее 2 раз', true,2)" class="there">Менее 2 раз</button>
          <button v-on:click="sendMessage('От 3 до 5 раз', true,2)" class="there">От 3 до 5 раз</button>
          <button v-on:click="sendMessage('Больше 5 раз', true,2)" class="there">Больше 5 раз</button>
        </template>
        <template v-if="userStage >= 11">
          <div class="text">Спасибо за ваши ответы</div>
        </template>
      </div>
    </div>
    <!--HR-->
  </div>
</template>

<script>

import firebase from "firebase";

export default {
  name: 'Home',
  components: {},
  data: () => {
    return {
      messages: [
        {
          id: 1,
          message: "Привет! Я твой личный помощник Работут.<br>" +
              "Рад, что ты с нами! Я хочу, чтобы тебе было комфортно работать у нас, поэтому в первые дни буду время от времени задавать вопросы о том, как проходит адаптация в коллективе. <br>" +
              "Хорошего дня, я напишу ближе к обеду, когда у тебя будет пара свободных минут :)",
          me: false
        },
        {
          id: 2,
          message: "Ну что, готов ответить на несколько вопросов?",
          me: false
        }
      ],
      messages2: [],
      messages3: [],
      msg: "",
      userStage: 0,
      answers: [
        [], []
      ],
      series: [{
        name: 'Стажер',
        data: [],
      }, {
        name: 'Наставник',
        data: [],
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radar',
          toolbar: {
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false
            },
          }
        },

        xaxis: {
          categories: ['1 вопрос', '2 вопрос', '3 вопрос']
        },
        legend: {
          position: 'bottom',
          offsetY: 0
        },
      },
      chart: false,
      token: "",
      notifyBtn: false,
      day: 1,
    }
  },
  mounted() {
  },
  methods: {
    sendUserMsg(text) {
      this.messages.push({id: this.messages.length + 1, message: text, me: true});
      this.sendMessage("Это я — Работут. И у меня есть пара коротких вопросов :) Это займет 3−4 минуты, не больше.", false, 1)
      this.sendMessage("Оцени общение со своим руководителем на новом рабочем месте по пятибалльной шкале. <br>1 — «не общался»<br> 5 — «вводное общение прошло отлично, он мне помогает войти в курс дела».", false, 1)
      console.log(this.userStage)
    },
    nextStage() {
      this.userStage = this.userStage + 1
    },
    nextDey() {
      let nd = (this.day === 5) ? this.day = 1 : this.day = this.day + 1;
      this.messages = [];
      this.userStage = 0;
      switch (nd) {
        case 1:
          this.sendMessage("Это я — Работут. И у меня есть пара коротких вопросов :) Это займет 3−4 минуты, не больше.", false, 1)
          this.sendMessage("Оцени общение со своим руководителем на новом рабочем месте по пятибалльной шкале. <br>1 — «не общался»<br> 5 — «вводное общение прошло отлично, он мне помогает войти в курс дела».", false, 1)
          break
        case 2:
          this.sendMessage("Это я — Работут. И у меня есть пара коротких вопросов :) Это займет 3−4 минуты, не больше.", false, 1)
          this.sendMessage("Кто проводил для тебя вводное обучение на рабочем месте?.<br>" +
              "1. Руководитель<br>" +
              "2. Коллега<br>" +
              "3. Никто<br>", false, 1)
            console.log(this.userStage)
          break
        case 3:
          this.sendMessage("Это я — Работут. И у меня есть пара коротких вопросов :) Это займет 3−4 минуты, не больше.", false, 1)
          this.sendMessage("Достаточно ли внимания уделил тебе руководитель в первые три рабочих дня?<br>" +
              "<br>" +
              "1. Мне уделили достаточно внимания<br>" +
              "2. Мне уделили недостаточно внимания<br>" +
              "3. Мне совсем не уделяют внимания", false, 1)
              break
        case 4:
          this.sendMessage("Привет! А вот и я :) У меня снова несколько вопросов по поводу наставника.", false, 1)
          this.sendMessage("К кому ты обращаешься, если во время работы возникают вопросы?<br>" +
              "<br>" +
              "" +
              "1. К руководителю<br>" +
              "2. К наставнику<br>" +
              "3. К коллегам<br>" +
              "4. Ищу ответ в приложении<br>" +
              "5. Я не знаю, к кому обратиться", false, 1)
          break
        case 5:
          this.sendMessage("Привет! Это твой помощник Работут :) Недавно ты прошел вводное обучение — хотел задать тебе несколько вопросов, чтобы сделать его более качественным и понятным.", false, 1)
          this.sendMessage("Сколько курсов на учебном портале ты прошел с начала работы?", false, 1)
          break
      }

    },
    sendMessage(msg, me, chatID) {
      if (msg.length === 0) {
        msg = this.msg
      }
      this.nextStage();
      if (chatID === 1) {
        this.messages.push({id: this.messages.length + 1, message: msg, me: me});
      } else if (chatID === 2) {
        this.messages2.push({id: this.messages.length + 1, message: msg, me: me});
      }
      this.msg = "";

      switch (this.day) {
        case 1:
          switch (this.userStage) {
            case 0:
              this.sendMessage("Это я — Работут. И у меня есть пара коротких вопросов :) Это займет 3−4 минуты, не больше.", false, 1)
              this.sendMessage("Оцени общение со своим руководителем на новом рабочем месте по пятибалльной шкале. <br>1 — «не общался»<br> 5 — «вводное общение прошло отлично, он мне помогает войти в курс дела».", false, 1)
              break;

            case 3:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Спасибо! Двигаемся дальше. <br><br>" +
                    "Достаточно ли внимания уделил тебе твой руководитель в первый рабочий день? Введи цифру от 1 до 3.<br>" +
                    "1. Мне уделили достаточно внимания<br>" +
                    "2. Мне уделили недостаточно внимания<br>" +
                    "3. Меня просто игнорируют",
                me: false
              });
              console.log(this.userStage)
              break;
            case 4:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Отлично! Осталось совсем немного :)<br><br>" +
                    "С какими учебными материалами тебя познакомили? Введи цифру от 1 до 4.<br>" +
                    "1. Курс «Добро пожаловать»<br>" +
                    "2. Курс «Стандарты работы»<br>" +
                    "3. Курсы «Добро пожаловать» и «Стандарты работы»<br>" +
                    "4. Я не слышал об этих учебных материалах",
                me: false
              });
              console.log(this.userStage)
              break;
            case 5:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Переходим к следующему вопросу :)<br><br>" +
                    "Тебя познакомили с руководством торговой точки?<br>",
                me: false
              });
              break;

            case 6:
              this.messages.push({
                id: this.messages2.length + 1,
                message: "Супер! Остался последний вопрос.<br><br>" +
                    "Оцени свой первый рабочий день в компании по пятибалльной шкале. <br>1 — «все очень плохо»<br> 5 — «отлично».",
                me: false
              });
              break;
            case 7:
              this.messages.push({
                id: this.messages2.length + 1,
                message: "Спасибо за ответы! Я вернусь вечером :)",
                me: false
              });

              break;
            case 8:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "Я оперативно даю ответы на вопросы сотрудника",
                me: false
              });
              this.answers[1].push({id: 2, a: msg})
              this.series[1].data.push(msg)
              break;
            case 9:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "Я объяснил сотруднику где искать необходимую информацию",
                me: false
              });
              this.answers[1].push({id: 3, a: msg})
              this.series[1].data.push(msg)
              break;
            case 1111:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "За последние 5 рабочих дней ты беседовал с новым сотрудником:",
                me: false
              });
              this.answers[1].push({id: 4, a: msg})
              this.series[1].data.push(msg)
              break;
            case 111111:
              this.answers[1].push({id: 5, a: msg})
              console.log(this.answers)
              this.messages3.push({
                id: this.messages3.length + 1,
                message: "<table border=\"1\" width=\"100%\" cellpadding=\"5\"><tr><td colspan='2'>Результаты</td></tr>" +
                    "<tr><td colspan='2'>Первый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][0]["a"] + "</td><td>" + this.answers[1][0]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Второй вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][1]["a"] + "</td><td>" + this.answers[1][1]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Третий вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][2]["a"] + "</td><td>" + this.answers[1][2]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Четвертый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][3]["a"] + "</td><td>" + this.answers[1][3]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Пятый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][4]["a"] + "</td><td>" + this.answers[1][4]["a"] + "</td></tr></table>",
                me: false
              });
              this.chart = true;
              break
          }
          break
        case 2:
          switch (this.userStage) {
            case 0:
              this.sendMessage("Напиши имя и фамилию твоего наставника / руководителя / коллеги.", false, 1)
              break;

            case 3:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Отлично, продолжаем! :)<br><br>" +
                    "Сколько времени уделил тебе наставник / руководитель при первой встрече?<br>" +
                    "1. Менее 10 минут<br>" +
                    "2. Около 30 минут<br>" +
                    "3. Около часа<br>" +
                    "4. Полдня<br>" +
                    "5. Весь день<br>" +
                    "6. Нисколько",
                me: false
              });
              break;
            case 4:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Насколько четко и понятно наставник / коллега / руководитель объяснил твои обязанности и задачи? <br>" +
                    "<br>" +
                    "1. Все предельно понятно и подробно<br>" +
                    "2. В целом понятно<br>" +
                    "3. После инструктажа было по прежнему ничего не понятно",
                me: false
              });
              console.log(this.userStage)
              break;
            case 5:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Отлично! Остался всего 1 вопрос :)<br>" +
                    "Оцени работу своего наставника / коллеги / руководителя по пятибалльной шкале. 1 — «очень плохо», 5 «все отлично»",
                me: false
              });
              break;

            case 6:
              this.messages.push({
                id: this.messages2.length + 1,
                message: "Спасибо! А расскажи, что понравилось и не понравилось в работе наставника?",
                me: false
              });
              break;
            case 7:
              this.messages.push({
                id: this.messages2.length + 1,
                message: "Супер! Был рад с тобой пообщаться! Спишемся завтра :)",
                me: false
              });

              break;
            case 8:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "Я оперативно даю ответы на вопросы сотрудника",
                me: false
              });
              this.answers[1].push({id: 2, a: msg})
              this.series[1].data.push(msg)
              break;
            case 9:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "Я объяснил сотруднику где искать необходимую информацию",
                me: false
              });
              this.answers[1].push({id: 3, a: msg})
              this.series[1].data.push(msg)
              break;
            case 1111:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "За последние 5 рабочих дней ты беседовал с новым сотрудником:",
                me: false
              });
              this.answers[1].push({id: 4, a: msg})
              this.series[1].data.push(msg)
              break;
            case 111111:
              this.answers[1].push({id: 5, a: msg})
              console.log(this.answers)
              this.messages3.push({
                id: this.messages3.length + 1,
                message: "<table border=\"1\" width=\"100%\" cellpadding=\"5\"><tr><td colspan='2'>Результаты</td></tr>" +
                    "<tr><td colspan='2'>Первый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][0]["a"] + "</td><td>" + this.answers[1][0]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Второй вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][1]["a"] + "</td><td>" + this.answers[1][1]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Третий вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][2]["a"] + "</td><td>" + this.answers[1][2]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Четвертый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][3]["a"] + "</td><td>" + this.answers[1][3]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Пятый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][4]["a"] + "</td><td>" + this.answers[1][4]["a"] + "</td></tr></table>",
                me: false
              });
              this.chart = true;
              break
          }
          break
        case 3:
          switch (this.userStage) {
            case 0:
              this.sendMessage("Напиши имя и фамилию твоего наставника / руководителя / коллеги.", false, 1)
              break;

            case 3:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Спасибо! У меня еще несколько небольших вопросов :)<br>" +
                    "<br>" +
                    "\<br>" +
                    "Тебя познакомили с руководством торговой точки?",
                me: false
              });
              break;
            case 4:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Записал. Продолжаем :)<br>" +
                    "<br>" +
                    "<br>" +
                    "Насколько ты готов к самостоятельной работе по пятибалльной шкале? 1 — «совсем не готов», 5 «полностью готов».<br>",
                me: false
              });
              console.log(this.userStage)
              break;
            case 5:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Насколько доступно и понятно твой руководитель / наставник доводил до тебя информацию? <br>" +
                    "<br>" +
                    "1. Все понятно<br>" +
                    "2. В целом понятно, но есть несколько вопросов<br>" +
                    "3. Совсем не понятно<br>",
                me: false
              });
              break;

            case 6:
              this.messages.push({
                id: this.messages2.length + 1,
                message: "Ну что ж, остался последний вопрос :)<br>" +
                    "<br>" +
                    "Порекомендуешь ли ты Работут своим знакомым?<br>",
                me: false
              });
              break;
            case 7:
              this.messages.push({
                id: this.messages2.length + 1,
                message: "Супер! Был рад с тобой пообщаться! Спишемся завтра :)",
                me: false
              });

              break;
            case 8:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "Я оперативно даю ответы на вопросы сотрудника",
                me: false
              });
              this.answers[1].push({id: 2, a: msg})
              this.series[1].data.push(msg)
              break;
            case 9:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "Я объяснил сотруднику где искать необходимую информацию",
                me: false
              });
              this.answers[1].push({id: 3, a: msg})
              this.series[1].data.push(msg)
              break;
            case 1111:
              this.messages2.push({
                id: this.messages2.length + 1,
                message: "За последние 5 рабочих дней ты беседовал с новым сотрудником:",
                me: false
              });
              this.answers[1].push({id: 4, a: msg})
              this.series[1].data.push(msg)
              break;
            case 111111:
              this.answers[1].push({id: 5, a: msg})
              console.log(this.answers)
              this.messages3.push({
                id: this.messages3.length + 1,
                message: "<table border=\"1\" width=\"100%\" cellpadding=\"5\"><tr><td colspan='2'>Результаты</td></tr>" +
                    "<tr><td colspan='2'>Первый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][0]["a"] + "</td><td>" + this.answers[1][0]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Второй вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][1]["a"] + "</td><td>" + this.answers[1][1]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Третий вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][2]["a"] + "</td><td>" + this.answers[1][2]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Четвертый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][3]["a"] + "</td><td>" + this.answers[1][3]["a"] + "</td></tr>" +

                    "<tr><td colspan='2'>Пятый вопрос</td></tr>" +
                    "<tr><td>Ответ Стажера</td><td>Ответ Наставника</td></tr>" +
                    "<tr><td>" + this.answers[0][4]["a"] + "</td><td>" + this.answers[1][4]["a"] + "</td></tr></table>",
                me: false
              });
              this.chart = true;
              break
          }
          break
        case 4:
          switch (this.userStage) {
            case 0:
              this.sendMessage("Сколько времени уделил тебе наставник / руководитель в первые три дня?<br>" +
                  "<br>" +
                  "1. Слишком много времени<br>" +
                  "2. Достаточно времени<br>" +
                  "3. Хотелось бы больше <br>" +
                  "4. Совсем не уделил времени", false, 1)
              break;

            case 3:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Отлично, осталось совсем немного :)<br>" +
                    "<br>" +
                    "Есть ли у тебя вопросы, связанные с:<br>" +
                    "1. работой<br>" +
                    "2. оформлением<br>" +
                    "3. оплатой труда<br>" +
                    "4. графиком<br>" +
                    "5. нет вопросов",
                me: false
              });
              break;
            case 4:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Спасибо! Последний вопрос :)<br>" +
                    "<br>" +
                    "Напиши, какие вопросы у тебя остались.",
                me: false
              });
              console.log(this.userStage)
              break;
            case 5:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Класс! На сегодня все. Время от времени я буду присылать тебе полезные материалы и информацию о наших конкурсах. Будем на связи! :)\n",
                me: false
              });
              break;

            case 6:
              this.messages.push({
                id: this.messages2.length + 1,
                message: "Ну что ж, остался последний вопрос :)<br>" +
                    "<br>" +
                    "Порекомендуешь ли ты Работут своим знакомым?<br>",
                me: false
              });
              break;
          }
          break
        case 5:
          switch (this.userStage) {
            case 3:
              this.sendMessage("Спасибо! Идем дальше :)<br>" +
                  "<br>" +
                  "Какой из курсов был самым интересным и полезным?<br>" +
                  "1. Курс «Добро пожаловать»<br>" +
                  "2. Курс «Стандарты работы»<br>" +
                  "3. Курс по продукту", false, 1)
              break;

            case 5:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Прекрасно! А у меня еще несколько вопросов :)<br>" +
                    "<br>" +
                    "Как ты думаешь, ты уже готовы к самостоятельной работе?<br>",
                me: false
              });
              break;
            case 6:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Супер! последний вопрос :)<br>" +
                    "<br>" +
                    "Напиши, что осталось непонятно или какие вопросы и сложности возникли в процессе обучения. Так мы сможем сделать обучения более качественным.<br>",
                me: false
              });
              console.log(this.userStage)
              break;
            case 7:
              this.messages.push({
                id: this.messages.length + 1,
                message: "Ты классный! Ты мне очень помог! Время от времени я буду присылать тебе полезные материалы и информацию о наших конкурсах. Будем на связи! :)\n",
                me: false
              });
              break;
          }
          break
      }

    },
    pushNotify() {
      // const messaging = firebase.messaging();
      // messaging.getToken({vapidKey: "BLyBLwc2kgXIpsL-Q1c4bq_JequrOvSBybkEPPllFkhY_sXYv5WZU0G3ZSwYp8QOkqI8DMBtBkivxo0tpEpcETE"})
      //     .then((currentToken) => {
      //       if (currentToken) {
      //         console.log('pushToken', currentToken);
      //         localStorage.setItem('pushToken', currentToken);
      //         //this.sendMessage("TOKEN TEST: " + currentToken, false, 1)
      //       } else {
      //         // Show permission request.
      //         console.log('No registration token available. Request permission to generate one.');
      //         // Show permission UI.
      //       }
      //     })
      //
      // if ('Notification' in window) {
      //   messaging.onMessage(function(payload) {
      //     console.log('Message received. ', payload);
      //     new Notification(payload.notification.title, payload.notification);
      //   });
      //   firebase.messaging().onMessage(() => {
      //     alert('Notification received!');
      //   });
      // }
      // messaging.onMessage(function(payload) {
      //   const data = { ...payload.notification, ...payload.data };
      //   const notificationTitle = data.title;
      //   const notificationOptions = {
      //     body: data.body,
      //     icon: data.icon,
      //     image: data.image,
      //     click_action: data.click_action,
      //     requireInteraction: true,
      //     data
      //   };
      //   new Notification(payload.notification.title, payload.notification);
      // });
      //

    },
    sendNotify() {
      // const messaging = firebase.messaging();
      // messaging.onMessage(function(payload) {
      //   console.log('Message received. ', payload);
      //
      //   // регистрируем пустой ServiceWorker каждый раз
      //   navigator.serviceWorker.register('messaging-sw.js');
      //
      //   // запрашиваем права на показ уведомлений если еще не получили их
      //   Notification.requestPermission(function(result) {
      //     if (result === 'granted') {
      //       navigator.serviceWorker.ready.then(function(registration) {
      //         // теперь мы можем показать уведомление
      //         return registration.showNotification(payload.notification.title, payload.notification);
      //       }).catch(function(error) {
      //         this.sendMessage("ServiceWorker registration failed", false, 1)
      //         console.log('ServiceWorker registration failed', error);
      //       });
      //     }
      //   });
      // });

      // messaging.getToken({vapidKey: "BLyBLwc2kgXIpsL-Q1c4bq_JequrOvSBybkEPPllFkhY_sXYv5WZU0G3ZSwYp8QOkqI8DMBtBkivxo0tpEpcETE"})
      //     .then((currentToken) => {
      //       if (currentToken) {
      //         console.log('pushToken', currentToken);
      //         //localStorage.setItem('pushToken', currentToken);
      //         this.sendMessage("TOKEN TEST: " + currentToken, false, 1)
      //       } else {
      //         // Show permission request.
      //         this.sendMessage("No registration token available. Request permission to generate one.", false, 1)
      //         console.log('No registration token available. Request permission to generate one.');
      //         // Show permission UI.
      //       }
      //     })

    }
  }
}
</script>

<style>

</style>

