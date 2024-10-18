<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
</script>

<Tabs.Root value="apps" class="w-full h-full">
	<Tabs.List class="bg-card-darker h-full">
		<Tabs.Trigger
			value="apps"
			hidden={false}
			class="bg-card-darker px-4 border-none ring-0 min-h-full">Apps</Tabs.Trigger
		>
		<Tabs.Trigger value="timeline" class="bg-card-darker px-4 border-none ring-0 min-h-full"
			>Timeline</Tabs.Trigger
		>
		<Tabs.Trigger value="subdomain" class="bg-card-darker px-4 border-none ring-0 min-h-full"
			>Subdomínio</Tabs.Trigger
		>
	</Tabs.List>
	<Tabs.Content value="apps" class="w-full bg-card-darker"
		>Make changes to your apps here.</Tabs.Content
	>
	<Tabs.Content value="timeline" class="w-full bg-card-darker">Timeline here.</Tabs.Content>
	<Tabs.Content value="subdomain" class="w-full bg-card-darker">
		<h1 class="text-2xl font-semibold">Registre um Subdomínio</h1>
		<p>
			Aqui você não precisa comprar um domínio, disponibilizamos um subdomínio totalmente gratuito
			para que você possa hospedar as suas aplicações web. Este recurso esta disponível apenas nos
			platina ou superior.
		</p>
	</Tabs.Content>
</Tabs.Root>
