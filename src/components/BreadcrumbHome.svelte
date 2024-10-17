<script lang="ts">
	// @ts-nocheck

	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index';
</script>

<div>
	<Breadcrumb.Root>
		<Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/" class="text-foreground">Inicio</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/" class="text-zinc-600">Painel de Controle</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb.List>
	</Breadcrumb.Root>
</div>
