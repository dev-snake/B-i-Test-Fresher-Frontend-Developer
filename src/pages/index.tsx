import { useState } from 'react'
import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const tabList: string[] = ['All', 'Pending', 'Completed']
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <main className="mx-auto w-[480px] pt-12">
      <Tabs.Root>
        <div className="rounded-12 bg-white p-8 shadow-sm">
          <h1 className="text-center text-4xl font-extrabold text-gray-900">
            Todo App
          </h1>
          <Tabs.List className=" flex gap-x-2  pt-10">
            {tabList.map((tab, index: number) => (
              <Tabs.Trigger
                value={tab}
                key={index}
                className={`rounded-full ${
                  activeIndex === index
                    ? 'bg-gray-700 text-white'
                    : 'border border-gray-200 text-gray-700'
                }  px-6 py-3 font-bold leading-5`}
                onClick={() => setActiveIndex(index)}
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabList.map((tabContent, index: number) => (
            <Tabs.Content value={tabContent} key={index}>
              <div className="pt-10">
                <TodoList tabTitle={tabContent} />
              </div>
            </Tabs.Content>
          ))}

          <div className="pt-10">
            <CreateTodoForm />
          </div>
        </div>
      </Tabs.Root>
    </main>
  )
}

export default Index
