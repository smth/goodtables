<template>
  <ul class="nav secondary">
    <li class="feedback">
      <a class="expand collapsed" data-toggle="collapse" href="#feedback" aria-expanded="false" aria-controls="feedback"><img src="~assets/img/feedback.svg" alt=""> <span class="text">Feedback</span></a>
      <div class="nav-content collapse" id="feedback">
        <div>
          <p>To provide feedback or report an issue:</p>
          <ul>
            <li>Give feedback <a href="https://discuss.okfn.org/t/launching-goodtables-io-tell-us-what-you-think" target="_blank">thread</a> on the Open Knowledge International forum.</li>
            <li>Open a bug report or a feature request on the <a href="https://github.com/frictionlessdata/goodtables.io/issues" target="_blank">goodtables.io issue tracker</a>.</li>
            <li>Join our <a href="https://gitter.im/frictionlessdata/chat" target="_blank">chat room on Gitter, and talk to the team</a>.</li>
          </ul>
        </div>
      </div>
    </li>
    <li v-if="loggedin" class="log-out">
      <a href="#"><img src="https://github.com/smth.png?size=52" alt="" /> <span class="text">Log out</span></a>
    </li>
    <li v-else class="log-in">
      <a href="#"><img src="~assets/img/login.svg" alt=""> <span class="text">Log in</span></a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['loggedin']
  }
</script>
