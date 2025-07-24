# Progress

A flexible progress component that supports both ring (circular) and bar (linear) progress indicators. Built with customizable styling and theming options for displaying task completion, loading states, and progress tracking.

## Features

- Two types: Ring (circular) and Bar (linear) progress indicators
- Customizable colors for trail and fill
- Support for custom content/children within progress indicators
- Flexible sizing for ring progress
- Configurable stroke width for ring progress
- CSS custom properties for easy theming
- Built-in accessibility features
- Full PrimeReact ProgressBar compatibility for bar type

## Basic Usage

```tsx
import { Progress } from '@1money/react-ui';

// Ring progress (default)
<Progress value={65} />

// Bar progress
<Progress type="bar" value={45} />

// Ring with custom size and content
<Progress 
  type="ring" 
  value={80} 
  size={120}
  stroke={8}
>
  <div style={{ textAlign: 'center' }}>
    <strong>80%</strong>
    <br />
    Complete
  </div>
</Progress>

// Bar with label
<Progress 
  type="bar" 
  value={60}
  showValue
  displayValueTemplate={(value) => `${value}% Complete`}
/>

// Custom colors
<Progress 
  type="ring"
  value={75}
  fillColor="#4CAF50"
  trailColor="#E0E0E0"
  bgColor="#F5F5F5"
/>
```

## Props

### Common Props (ProgressBaseProps)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | Content to display within the progress indicator | ReactNode | - |
| className | Additional CSS class for styling | string | - |
| prefixCls | The classname prefix for component styling | string | 'progress' |
| wrapperCls | Additional CSS class for wrapper element | string | - |
| trailColor | Color of the progress track/background | string | '#E0E2EE' |
| fillColor | Color of the progress fill/indicator | string | '#3D73F2' |
| id | HTML id attribute | string | - |

### Ring Progress Props (type="ring")

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | Progress indicator type | 'ring' | 'ring' |
| value | Progress value (0-100) | number \| `${number}` | 0 |
| size | Diameter of the ring in pixels | number \| `${number}` | 106 |
| stroke | Width of the ring stroke in pixels | number \| `${number}` | 6 |
| bgColor | Background color of the ring container | string | '#FAFAFC' |

### Bar Progress Props (type="bar")

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | Progress indicator type | 'bar' | - |
| labelColor | Color of the progress label text | string | '#FFFFFF' |

## Inherited Props (Bar type only)

When `type="bar"`, the component extends PrimeReact's ProgressBar and inherits all its props:

- `value?: number` - Progress value (0-100)
- `showValue?: boolean` - Whether to show the value label
- `displayValueTemplate?: (value: number) => string` - Custom value display format
- `unit?: string` - Unit to display with the value
- `style?: CSSProperties` - Inline styles
- `mode?: 'determinate' | 'indeterminate'` - Progress mode

## Types

### Ring Progress
- **Appearance**: Circular progress indicator with customizable size and stroke
- **Use for**: Dashboards, statistics, completion rates, skill levels
- **Content**: Supports children content in the center of the ring

### Bar Progress  
- **Appearance**: Linear horizontal progress bar
- **Use for**: File uploads, form completion, loading states, step indicators
- **Labels**: Built-in value display and custom formatting

## Styling

The Progress component uses SCSS modules with BEM-like naming conventions and CSS custom properties:

### CSS Custom Properties

- `--progress`: Progress percentage value
- `--last`: Remaining percentage (100% - progress)
- `--size`: Ring diameter
- `--stroke`: Ring stroke width
- `--bg-color`: Ring container background
- `--trail-color`: Progress track color
- `--fill-color`: Progress indicator color
- `--label-color`: Label text color (bar type)

### Customization Methods

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. CSS custom properties for theme customization
4. Direct color props for quick styling

## Accessibility

- Semantic progress indicators with appropriate ARIA attributes
- Screen reader support for progress values
- High contrast mode compatibility
- Keyboard navigation support where applicable
- Proper color contrast ratios

## Examples

### Financial Goal Progress

```tsx
const GoalProgress = ({ current, target, goalName }) => {
  const percentage = Math.round((current / target) * 100);
  
  return (
    <div className="goal-tracker">
      <h3>{goalName}</h3>
      <Progress 
        type="ring"
        value={percentage}
        size={140}
        stroke={10}
        fillColor="#4CAF50"
        trailColor="#E8F5E8"
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
            ${current.toLocaleString()}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            of ${target.toLocaleString()}
          </div>
          <div style={{ fontSize: '18px', marginTop: '4px' }}>
            {percentage}%
          </div>
        </div>
      </Progress>
    </div>
  );
};
```

### Task Completion Dashboard

```tsx
const TaskDashboard = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="task-dashboard">
      <Progress 
        type="ring"
        value={completionRate}
        size={100}
        fillColor="#2196F3"
      >
        <div style={{ textAlign: 'center' }}>
          <strong>{completedTasks}</strong>
          <br />
          <span style={{ fontSize: '12px' }}>
            of {totalTasks}
          </span>
        </div>
      </Progress>
      
      <div className="task-details">
        <h4>Task Progress</h4>
        <p>{completedTasks} completed out of {totalTasks} tasks</p>
      </div>
    </div>
  );
};
```

### File Upload Progress

```tsx
const FileUpload = ({ uploadProgress, fileName }) => {
  return (
    <div className="upload-container">
      <div className="file-info">
        <span>{fileName}</span>
        <span>{uploadProgress}%</span>
      </div>
      
      <Progress 
        type="bar"
        value={uploadProgress}
        fillColor="#FF9800"
        trailColor="#FFF3E0"
        showValue={false}
      />
      
      {uploadProgress === 100 && (
        <div className="upload-success">
          <i className="pi pi-check"></i> Upload complete
        </div>
      )}
    </div>
  );
};
```

### Multi-Step Process

```tsx
const MultiStepProgress = ({ currentStep, totalSteps, stepNames }) => {
  const progressValue = (currentStep / totalSteps) * 100;
  
  return (
    <div className="multi-step-progress">
      <div className="step-info">
        Step {currentStep} of {totalSteps}: {stepNames[currentStep - 1]}
      </div>
      
      <Progress 
        type="bar"
        value={progressValue}
        displayValueTemplate={(value) => `Step ${currentStep}/${totalSteps}`}
        showValue
        fillColor="#9C27B0"
      />
      
      <div className="step-indicators">
        {stepNames.map((step, index) => (
          <div 
            key={index}
            className={`step-indicator ${index < currentStep ? 'completed' : ''} ${index === currentStep - 1 ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Skill Level Indicators

```tsx
const SkillLevels = ({ skills }) => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-header">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          
          <Progress 
            type="ring"
            value={skill.level}
            size={80}
            stroke={6}
            fillColor={skill.color}
          >
            <div style={{ 
              fontSize: '16px', 
              fontWeight: 'bold',
              color: skill.color 
            }}>
              {skill.level}%
            </div>
          </Progress>
        </div>
      ))}
    </div>
  );
};
```

### Budget Tracking

```tsx
const BudgetTracker = ({ spent, budget, category }) => {
  const percentage = Math.round((spent / budget) * 100);
  const isOverBudget = percentage > 100;
  const displayPercentage = Math.min(percentage, 100);
  
  return (
    <div className="budget-tracker">
      <h4>{category} Budget</h4>
      
      <Progress 
        type="bar"
        value={displayPercentage}
        fillColor={isOverBudget ? '#F44336' : '#4CAF50'}
        trailColor="#F5F5F5"
        showValue={false}
      />
      
      <div className="budget-details">
        <span>${spent.toFixed(2)} of ${budget.toFixed(2)}</span>
        <span className={isOverBudget ? 'over-budget' : 'within-budget'}>
          {percentage}%
        </span>
      </div>
      
      {isOverBudget && (
        <div className="budget-warning">
          Over budget by ${(spent - budget).toFixed(2)}
        </div>
      )}
    </div>
  );
};
```

### Custom Styled Progress

```tsx
// Custom ring with gradient effect
<Progress 
  type="ring"
  value={85}
  size={150}
  stroke={12}
  fillColor="linear-gradient(45deg, #FF6B6B, #4ECDC4)"
  trailColor="#F8F9FA"
  className="gradient-progress"
>
  <div className="progress-content">
    <div className="value">85%</div>
    <div className="label">Complete</div>
  </div>
</Progress>

// Custom bar with rounded edges
<Progress 
  type="bar"
  value={70}
  className="rounded-progress-bar"
  style={{ borderRadius: '10px', height: '20px' }}
  fillColor="#6C5CE7"
/>
```
