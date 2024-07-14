import * as Avatar from "@radix-ui/react-avatar";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import * as Separator from "@radix-ui/react-separator";
import * as HoverCard from "@radix-ui/react-hover-card";
import me from "@/assets/me.webp";

export default function About() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
      <AspectRatio.Root ratio={16 / 9}>
        <img src={me} alt="Profile picture" className="h-full w-full object-cover" />
      </AspectRatio.Root>

      <div className="p-6">
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <Avatar.Root className="mb-4 inline-flex h-24 w-24 cursor-pointer select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image className="h-full w-full object-cover" src={me} alt="Profile picture" />
              <Avatar.Fallback className="leading-1 flex h-full w-full items-center justify-center bg-white text-3xl font-medium text-violet-500">
                JD
              </Avatar.Fallback>
            </Avatar.Root>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all">
              <div className="flex flex-col gap-[7px]">
                <img className="block h-[60px] w-[60px] rounded-full" src={me} alt="Profile" />
                <div className="flex flex-col gap-[15px]">
                  <div>
                    <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                      John Doe
                    </div>
                    <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                      Software Developer
                    </div>
                  </div>
                  <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
                    Passionate about creating beautiful and functional web applications.
                  </div>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>

        <h1 className="mb-2 text-2xl font-bold">John Doe</h1>

        <Separator.Root className="my-4 bg-violet-200 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />

        <blockquote className="mb-4 text-lg italic text-gray-600">
          "The only way to do great work is to love what you do."
        </blockquote>

        <p className="text-gray-700">
          I'm a passionate developer with a keen interest in creating beautiful and functional web
          applications. With experience in React and a love for clean code, I strive to make the web
          a better place, one component at a time.
        </p>
      </div>
    </div>
  );
}
