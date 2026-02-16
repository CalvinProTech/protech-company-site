'use client';

import {
  type ReactNode,
  createContext,
  use,
  useCallback,
  useId,
  useState,
} from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

type AccordionContextValue = {
  openItemId: string | null;
  toggleItem: (id: string) => void;
};

const AccordionContext = createContext<AccordionContextValue>({
  openItemId: null,
  toggleItem: () => {},
});

type AccordionItemContextValue = {
  itemId: string;
  isOpen: boolean;
  triggerId: string;
  contentId: string;
};

const AccordionItemContext = createContext<AccordionItemContextValue>({
  itemId: '',
  isOpen: false,
  triggerId: '',
  contentId: '',
});

/* ─── Root ─── */

type AccordionRootProps = {
  defaultOpenId?: string | null;
  children: ReactNode;
  className?: string;
};

function AccordionRoot({
  defaultOpenId = null,
  children,
  className,
}: AccordionRootProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(
    defaultOpenId ?? null
  );

  const toggleItem = useCallback((id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <AccordionContext value={{ openItemId, toggleItem }}>
      <div className={cn('divide-y divide-neutral-200', className)}>
        {children}
      </div>
    </AccordionContext>
  );
}

/* ─── Item ─── */

type AccordionItemProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

function AccordionItem({ id, children, className }: AccordionItemProps) {
  const { openItemId } = use(AccordionContext);
  const generatedId = useId();
  const isOpen = openItemId === id;
  const triggerId = `accordion-trigger-${generatedId}`;
  const contentId = `accordion-content-${generatedId}`;

  return (
    <AccordionItemContext
      value={{ itemId: id, isOpen, triggerId, contentId }}
    >
      <div className={cn('', className)}>{children}</div>
    </AccordionItemContext>
  );
}

/* ─── Trigger ─── */

type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
};

function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { toggleItem } = use(AccordionContext);
  const { itemId, isOpen, triggerId, contentId } = use(AccordionItemContext);

  return (
    <button
      id={triggerId}
      type="button"
      role="button"
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={() => toggleItem(itemId)}
      className={cn(
        'flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left',
        'text-lg font-semibold text-neutral-900',
        'cursor-pointer transition-colors duration-200 hover:text-primary-700',
        'focus-visible:outline-3 focus-visible:outline-primary-500 focus-visible:outline-offset-2',
        className
      )}
    >
      <span className="flex-1">{children}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="shrink-0"
      >
        <ChevronDown className="h-5 w-5 text-neutral-500" aria-hidden="true" />
      </motion.span>
    </button>
  );
}

/* ─── Content ─── */

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
};

function AccordionContent({ children, className }: AccordionContentProps) {
  const { isOpen, contentId, triggerId } = use(AccordionItemContext);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className={cn('pb-4 text-neutral-600 leading-relaxed', className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export default Accordion;
