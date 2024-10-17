<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
</script>

<Tabs.Root value="account" class="w-[400px]">
	<Tabs.List>
		<Tabs.Trigger value="apps">Apps</Tabs.Trigger>
		<Tabs.Trigger value="timeline">Timeline</Tabs.Trigger>
		<Tabs.Trigger value="">Subdomínio</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="apps">Make changes to your apps here.</Tabs.Content>
	<Tabs.Content value="timeline">Timeline here.</Tabs.Content>
</Tabs.Root>
