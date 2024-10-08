declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"auto-gpu-buying-bot-currys-pc.md": {
	id: "auto-gpu-buying-bot-currys-pc.md";
  slug: "auto-gpu-buying-bot-currys-pc";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"blog-update.md": {
	id: "blog-update.md";
  slug: "blog-update";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"chat-with-my-consciousness.md": {
	id: "chat-with-my-consciousness.md";
  slug: "chat-with-my-consciousness";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"crypto-trading-bot.md": {
	id: "crypto-trading-bot.md";
  slug: "crypto-trading-bot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"data-loss.md": {
	id: "data-loss.md";
  slug: "data-loss";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"first_blog_post.md": {
	id: "first_blog_post.md";
  slug: "first_blog_post";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"fresh-start-on-proxmox.md": {
	id: "fresh-start-on-proxmox.md";
  slug: "fresh-start-on-proxmox";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"lily58-reborn.md": {
	id: "lily58-reborn.md";
  slug: "lily58-reborn";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"lily58l.md": {
	id: "lily58l.md";
  slug: "lily58l";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"nixos.md": {
	id: "nixos.md";
  slug: "nixos";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"nvidia-gpu-in-proxmox-lxc.md": {
	id: "nvidia-gpu-in-proxmox-lxc.md";
  slug: "nvidia-gpu-in-proxmox-lxc";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pi-deck-teaser.md": {
	id: "pi-deck-teaser.md";
  slug: "pi-deck-teaser";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"piserver-gallery.md": {
	id: "piserver-gallery.md";
  slug: "piserver-gallery";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"piserver-usbmod.md": {
	id: "piserver-usbmod.md";
  slug: "piserver-usbmod";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"piserver.md": {
	id: "piserver.md";
  slug: "piserver";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"proxmox-resizing-a-disk.md": {
	id: "proxmox-resizing-a-disk.md";
  slug: "proxmox-resizing-a-disk";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"remote-access-on-server-pc.md": {
	id: "remote-access-on-server-pc.md";
  slug: "remote-access-on-server-pc";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"second_blog_post.md": {
	id: "second_blog_post.md";
  slug: "second_blog_post";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"setting-up-ssh-on-unix.md": {
	id: "setting-up-ssh-on-unix.md";
  slug: "setting-up-ssh-on-unix";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"sff-server-pc.md": {
	id: "sff-server-pc.md";
  slug: "sff-server-pc";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"simple-intro-to-natural-language-processing-with-python.md": {
	id: "simple-intro-to-natural-language-processing-with-python.md";
  slug: "simple-intro-to-natural-language-processing-with-python";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"tailscale-openwrt.md": {
	id: "tailscale-openwrt.md";
  slug: "tailscale-openwrt";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"third_blog_post.md": {
	id: "third_blog_post.md";
  slug: "third_blog_post";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"tmux-tips.md": {
	id: "tmux-tips.md";
  slug: "tmux-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
