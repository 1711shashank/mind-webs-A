import CodeIcon from '@mui/icons-material/Code';
import CreateIcon from '@mui/icons-material/Create';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

export const cardData = [
    {
        left: {
            title: 'Explain Code',
            description: 'Explain some Code based on the syntax provided',
            placeholder: 'print("Hello World")',
            icon: <MessageOutlinedIcon className='mui-icon' />,

        },
        right: {
            title: 'What does this code do?',
            subtitle: 'The following code does:',
            steps: [
                'The above code is a function definition.',
                'It defines a new function called `Hello World` that takes a single argument called `text`',
                'The body of the function is a single line of code that prints out the value of the `text` if it is defined, or `Hello World` if it is not defined.',
            ],
        },
    },
    {
        left: {
            title: 'Regex',
            description: 'Explain a regular expression based on the pattern provided',
            placeholder: 'Enter regex pattern...',
            icon: <CodeIcon className='mui-icon' />,
        },
        right: {
            title: 'Explanation',
            subtitle: 'Explanation for the provided regular expression:',
            steps: [
                'Breaking down the regex pattern into individual components.',
                'Explaining the purpose of each part and its matching behavior.',
                'Providing examples of strings that would match the pattern.',
            ],
        },
    },
    {
        left: {
            title: 'Convert Code',
            description: 'Convert code from one format to another',
            placeholder: 'Enter code to convert...',
            icon: <MultipleStopIcon className='mui-icon' />,
        },
        right: {
            title: 'Conversion',
            subtitle: 'Steps to convert the provided code:',
            steps: [
                'Analyzing the original code and the desired target format.',
                'Identifying the necessary changes and transformations.',
                'Implementing the conversion while preserving functionality.',
            ],
        },
    },
    {
        left: {
            title: 'Fix Grammar',
            description: 'Correct grammar and language issues in the provided text',
            placeholder: 'Enter text to fix grammar...',
            icon: <CreateIcon className='mui-icon' />,
        },
        right: {
            title: 'Correction',
            subtitle: 'Steps to correct grammar and language issues:',
            steps: [
                'Identifying grammatical errors, typos, and clarity issues.',
                'Suggesting appropriate corrections for each identified problem.',
                'Ensuring the improved text maintains its original meaning.',
            ],
        },
    },
    {
        left: {
            title: 'Todo',
            description: 'Create a todo list based on the tasks provided',
            placeholder: 'Enter tasks for your todo list...',
            icon: <AssignmentIcon className='mui-icon' />,
        },
        right: {
            title: 'Todo List',
            subtitle: 'Tasks for the provided todo list:',
            steps: [
                'Listing out the tasks in the order they are provided.',
                'Organizing tasks based on priority or category if needed.',
                'Creating a clear and actionable list for the user.',
            ],
        },
    },
];

