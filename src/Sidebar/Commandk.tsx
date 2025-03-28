import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";

export const CommandMenu = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [value, setValue] = useState("");

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [setOpen]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-stone-950/50"
            onClick={() => setOpen(false)}
        >
            <Command
                className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
                onClick={(e) => e.stopPropagation()}
            >
                <Command.Input
                    value={value}
                    onValueChange={setValue}
                    className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
                    placeholder="What do you need?"
                />
                <Command.List 
                className="p-3">
                    <Command.Empty>
                        No results found.
                        <span className="text-violet-500">"{value}"</span>
                    </Command.Empty>
                    <Command.Group heading="Class"
                        className="text-sm mb-3 text-stone-400">
                        <Command.Item
                            className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPlus />
                            100l
                        </Command.Item>
                        <Command.Item
                            className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiEye />
                            200l
                        </Command.Item>
                        <Command.Separator />
                    </Command.Group>


                    <Command.Group heading="Student"
                        className="text-sm mb-3 text-stone-400">
                        <Command.Item
                            className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiLink />
                            Student's Name
                        </Command.Item>
                        <Command.Item
                            className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPhone />
                            Student's Matric
                        </Command.Item>
                        <Command.Separator />
                    </Command.Group>


                    <Command.Item
                            className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiLogOut />
                            Log Out
                        </Command.Item>
                </Command.List>
            </Command>
        </div>
    );
};
