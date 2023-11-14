<template>
   <Header/>
   <section class="flex flex-row items-stretch  h-screen justify-stretch pt-[51px]">
      <Sidebar/>
      <main class="bg-white  overflow-hidden w-full overflow-y-auto">
         <slot />
      </main>
  </section>
</template>