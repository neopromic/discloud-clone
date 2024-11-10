<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { Activity, Power, Settings } from 'lucide-svelte';
	import AppCard from './AppCard.svelte';

	interface App {
		id: string;
		name: string;
		avatar: string;
		description: string;
		isOn: boolean;
	}

	const apps: App[] = [
		{
			id: '1',
			name: 'App 1',
			avatar: 'https://github.com/neopromic.png',
			description: 'Bot discord',
			isOn: true
		},
		{
			id: '2',
			name: 'App 2',
			avatar: 'https://github.com/user2.png',
			description: 'Bot manager',
			isOn: false
		},
		{
			id: '3',
			name: 'App 3',
			avatar: 'https://github.com/user3.png',
			description: 'Shop bot',
			isOn: true
		},
		{
			id: '4',
			name: 'Roger',
			avatar: 'https://github.com/neopromic.png',
			description: 'Roger is the best bot of the world!',
			isOn: true
		}
	];
</script>

<Tabs.Root value="apps" class="w-full h-full">
	<Tabs.List class="bg-card-darker h-full flex-wrap justify-start items-center">
		<Tabs.Trigger
			value="apps"
			hidden={false}
			class="hover:text-primary bg-card-darker px-4 border-none ring-0 min-h-full"
			>Apps</Tabs.Trigger
		>
		<Tabs.Trigger
			value="timeline"
			class="hover:text-primary bg-card-darker px-4 border-none ring-0 min-h-full"
			>Timeline</Tabs.Trigger
		>
		<Tabs.Trigger
			value="subdomain"
			class="hover:text-primary bg-card-darker px-4 border-none ring-0 min-h-full"
			>Subdomínio</Tabs.Trigger
		>
		<Tabs.Trigger value="custom-domain" class="hover:text-primary bg-card-darker px-4 "
			>Domínio personalizado</Tabs.Trigger
		>
		<Tabs.Trigger value="api-key" class="hover:text-primary bg-card-darker px-4 "
			>API Key</Tabs.Trigger
		>
	</Tabs.List>
	<Tabs.Content value="apps" class="w-full bg-card-darker px-4 py-2 space-y-4">
		<h1 class="text-2xl font-semibold">Aplicações registradas</h1>
		<div class="bg-card w-full min-h-12 p-4 space-y-4 rounded-md">
			{#each apps as app}
				<AppCard
					id={app.id}
					name={app.name}
					avatar={app.avatar}
					description={app.description}
					isOn={app.isOn}
				/>
			{/each}
		</div>
	</Tabs.Content>
	<Tabs.Content value="timeline" class="w-full bg-card-darker px-4 py-2 space-y-4">
		<h1 class="text-2xl font-semibold">Últimos registros</h1>
	</Tabs.Content>
	<Tabs.Content value="subdomain" class="w-full bg-card-darker px-4 py-2 space-y-4">
		<h1 class="text-2xl font-semibold">Registre um Subdomínio</h1>
		<p class="text-muted-foreground text-sm">
			Aqui você não precisa comprar um domínio, disponibilizamos um subdomínio totalmente gratuito
			para que você possa hospedar as suas aplicações web. Este recurso esta disponível apenas nos
			platina ou superior.
		</p>
	</Tabs.Content>
	<Tabs.Content value="custom-domain" class="w-full bg-card-darker px-4 py-2 space-y-4">
		<h1 class="text-2xl font-semibold">Registre um Domínio personalizado</h1>
		<p class="text-muted-foreground text-sm">
			Vincule um domínio que já pertença a você. Este recurso esta disponível apenas nos diamante ou
			superior. Não use http, https e www.
		</p>
	</Tabs.Content>
	<Tabs.Content value="api-key" class="w-full bg-card-darker px-4 py-2 space-y-4">
		<h1 class="text-2xl font-semibold">Sua chave de API</h1>
		<p class="text-muted-foreground text-sm">
			Aqui está sua chave da API da Discloud. Mantenha segura. Se você precisar alterar ou revogar
			uma chave de API, clique no botão reset token.
		</p>
		<p class="w-full min-h-10 bg-stone-600/20 rounded-lg p-4">...</p>
		<div class="flex justify-end">
			<button class="bg-primary rounded-md p-2 text-green-950 hover:bg-primary/80"
				>Reset Token</button
			>
		</div>
	</Tabs.Content>
</Tabs.Root>
