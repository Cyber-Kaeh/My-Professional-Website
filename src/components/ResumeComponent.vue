<template>
  <div class="container-sm">
    <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus in quisquam dolorum vitae aliquid, esse eaque excepturi, sequi nemo, dolorem eveniet nisi hic doloribus expedita est distinctio quam ab officiis suscipit doloremque? Ullam adipisci numquam iure perspiciatis atque assumenda, tenetur fuga ducimus possimus laudantium incidunt quia. Recusandae dolorum nisi et dicta quia eligendi corporis ipsam, harum maxime eveniet eaque inventore ullam sint. Pariatur tempore ipsa voluptatibus nemo itaque praesentium voluptatum nostrum illo quos iste? Ea vel optio possimus, neque minima cumque illo deserunt, odit doloremque culpa sed eius, unde fuga. Porro nemo, magni eius repudiandae dolores ipsam dicta quod.</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia minima nemo adipisci itaque reiciendis cumque error ullam, aspernatur consectetur accusantium molestias placeat nihil quibusdam non explicabo aliquam mollitia, harum reprehenderit nesciunt. Et sint dolores voluptas dolorem eius sunt, optio natus hic in provident. Vel tenetur maxime sed dolorum, tempora commodi cupiditate natus! Saepe ipsam vitae ipsum iusto eum inventore. Saepe culpa doloribus aperiam, delectus possimus qui cum quae, cumque exercitationem dolorum, in ab assumenda atque nulla sit iure impedit quo non autem necessitatibus pariatur ad! Voluptatem ut asperiores, quae ducimus nobis nostrum quisquam dolores earum voluptas repudiandae quidem voluptatum?</p>
</div>
  </div>
</template>

<script>
  export default {
    name: "ResumeComponent",
    props: {
      
    },
  }
</script>

<style scoped>
  .container-sm {
    padding-bottom: 60px;
  }
</style>
