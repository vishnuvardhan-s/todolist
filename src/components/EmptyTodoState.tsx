const sarcasticNoTodosSentences = [
    'Wow, my to-do list is empty. What a thrilling life I lead.',
    "I'm so productive, I don't even need a to-do list.",
    "I'm living on the edge with no to-do list.",
    "I'm so organized, I don't even need a to-do list...said no one ever.",
    "No to-do list? No problem. I'll just wing it.",
    "I'm a rebel without a to-do list.",
    "I'm so on top of things, I don't need a to-do list...or a brain.",
    "I'm living life on the edge with no to-do list to guide me.",
    'Having no todos is the ultimate goal in life, right?',
];

export const EmptyTodoState = () => (
    <div className="flex items-center justify-center space-x-2">
        <p className="font-virgil  px-4 py-4">{sarcasticNoTodosSentences[Math.floor(Math.random() * sarcasticNoTodosSentences.length)]}</p>
    </div>
);
