import { Box, Card, Flex } from '@chakra-ui/react';
import { Priority, Status } from '@/models/todo';

interface FilterBarProps {
  onFilterChange: (key: string, value: string) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const priority = [Priority.HIGH, Priority.MEDIUM, Priority.LOW];
  const status = [Status.IN_PROGRESS, Status.PENDING, Status.DONE];
  const dueDate = ['Urgent', 'Least Urgent'];

  return (
    <Card.Root w={'full'}>
      <Flex gap={10} p={4} justify='space-between'>
        <Box spaceX={4}>
          <label htmlFor='status'>Status</label>
          <select
            onChange={(e) => onFilterChange('status', e.target.value)}
            className='border px-2 py-1'
          >
            <option value={''} key={'None'}>
              {'All'}
            </option>
            {status.map((s) => (
              <option value={s} key={s}>
                {s}
              </option>
            ))}
          </select>
        </Box>
        <Box spaceX={4}>
          <label htmlFor='priority'>Priority</label>
          <select
            onChange={(e) => onFilterChange('priority', e.target.value)}
            className='border px-2 py-1'
          >
            <option value={''} key={'None'}>
              {'All'}
            </option>
            {priority.map((p) => (
              <option value={p} key={p}>
                {p}
              </option>
            ))}
          </select>
        </Box>
        <Box spaceX={4}>
          <label htmlFor='due date'>Due date</label>
          <select
            onChange={(e) => onFilterChange('dueDate', e.target.value)}
            className='border px-2 py-1'
          >
            <option value={''} key={'None'}>
              {'All'}
            </option>
            {dueDate.map((d) => (
              <option value={d} key={d}>
                {d}
              </option>
            ))}
          </select>
        </Box>
      </Flex>
    </Card.Root>
  );
};

export default FilterBar;
