<template>
  <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading1">First</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading2">Second</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading3">Third</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading4">Fourth</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading5">Fifth</a>
      </li>
    </ul>
  </nav>
  <div
    data-bs-spy="scroll"
    data-bs-target="#navbar-example2"
    data-bs-offset="0"
    class="scrollspy-example"
    tabindex="0"
  >
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
      temporibus doloremque impedit fugiat, mollitia dolorem ut facilis sequi
      dolorum iste odit iure illum veritatis asperiores ad animi sed modi cum.
    </p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aliquid
      reiciendis animi quis numquam culpa vero! Pariatur debitis alias, saepe,
      officiis harum tenetur doloribus quod distinctio dolore sequi error iure.
    </p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
      deserunt tempore, dignissimos atque facere, dicta est excepturi, eos iure
      obcaecati nesciunt dolorem! Culpa quae, numquam corporis placeat saepe ex!
    </p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit
      asperiores dolorem minima alias perspiciatis, consectetur nisi commodi.
      Doloremque, animi. Aut modi facilis eaque eveniet ex reprehenderit impedit
      repellendus totam magni iste quibusdam fugit sed blanditiis, explicabo
      natus praesentium quas assumenda quae, distinctio maxime debitis inventore
      deserunt ut? Explicabo, itaque voluptates, maxime, dicta minima officiis
      repudiandae magni mollitia quod vero cum dolorum inventore placeat quia
      praesentium veniam voluptatem amet excepturi error illum vel sunt.
      Asperiores quasi dicta numquam repellat, est, nihil necessitatibus vel,
      accusamus dolore sapiente magnam architecto tempora consectetur vero
      ratione dolorem cupiditate? Totam nostrum aspernatur voluptate mollitia
      dolorem?
    </p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>...</p>
  </div>
</template>

<script>
  export default {
    name: "ResumeComponent",
    props: {
      resume: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style></style>
