<script lang="ts">
	const svgUrl = '/logo.svg';
</script>

<header class="sticky top-0 left-0 py-4 lg:px-12 px-4 bg-background/80 backdrop-blur-md flex justify-between items-center">
	<img src={svgUrl} alt="Discloud Logo" width="170" />
  <nav class="lg:flex items-center gap-4 hidden ">
    <ul class="flex gap-6">
      <li class="hover:text-primary transition-all">
        <a href="/">
        Planos
        </a>
      </li>
      <li class="hover:text-primary transition-all">
        <a href="/">
        Serviços
        </a>
      </li>
      <li class="hover:text-primary transition-all">
        <a href="/">
        Downloads
        </a>
      </li>
      <li class="hover:text-primary transition-all">
        <a href="/">
        Documentação
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <img src="https://github.com/neopromic.png" alt="Avatar" class="size-10 rounded-full cursor-pointer" />
      </li>
    </ul>
  </nav>
</header>
