import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Checkbox from '../components/Checkbox/Checkbox';
import RadioButton from '../components/RadioButton/RadioButton';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import TextArea from '../components/TextArea/TextArea';
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch';
import Dropdown from '../components/Dropdown/Dropdown';
import Label from '../components/Label/Label';
import CustomSlider from '../components/Slider/Slider';
import Stepper from '../components/Stepper/Stepper';
import Tabs from '../components/Tabs/Tabs';
import Accordion from '../components/Accordion/Accordion';
import BaapSafeArea from '../components/BaapSafeArea/BaapSafeArea';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Pagination from '../components/Pagination/Pagination';
import Drawer from '../components/Drawer/Drawer';
import Toast from '../components/Toast/Toast';
import Tooltip from '../components/Tooltip/Tooltip';
import Carousel from '../components/Carousel/Carousel';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Badge from '../components/Badge/Badge';
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader';
import Avatar from '../components/Avatar/Avatar';
import Chip from '../components/Chip/Chip';
import List from '../components/List/List';
import Table from '../components/Table/Table';
import Divider from '../components/Divider/Divider';
import Spinner from '../components/Spinner/Spinner';
import Typography from '../components/Typography/Typography';
import Grid from '../components/Grid/Grid';

interface SampleRenderItem {
  key: string;
  render: () => JSX.Element;
}

interface SampleSection {
  title: string;
  data: SampleRenderItem[];
}

interface TableRow {
  [key: string]: string | number;
}

interface Section {
  id: string;
  title: string;
  content: string;
}

const SampleScreen: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [stepperValue, setStepperValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState('tab1');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState('home');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [selectedDrawerItem, setSelectedDrawerItem] = useState('home');
  const [toastVisible, setToastVisible] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];
  const [progress, setProgress] = useState(0.5);
  const badgeCount = 5;
  const listItems = ['Item 1', 'Item 2', 'Item 3'];
  const tableData: TableRow[] = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 32 },
  ];
  const tableColumns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ];

  const accordionSections: Section[] = [
    {
      id: '1',
      title: 'Section 1',
      content: 'This is the content for section 1'
    },
    {
      id: '2',
      title: 'Section 2',
      content: 'This is the content for section 2'
    }
  ];

  const handlePress = () => {
    console.log('Button pressed!');
  };

  const handleChipPress = () => {
    console.log('Chip pressed!');
  };

  const tabs = [
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
    { id: 'tab3', label: 'Tab 3' },
  ];

  const breadcrumbItems = [
    { id: 'home', label: 'Home' },
    { id: 'category', label: 'Category' },
    { id: 'product', label: 'Product' },
  ];

  const drawerItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
  ];

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleToggle = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const sampleSections: SampleSection[] = [
    {
      title: 'Basic Components',
      data: [
        {
          key: 'basic',
          render: () => (
            <>
              <Text style={styles.title}>Sample Screen</Text>
              <Button onPress={handlePress}>Press Me</Button>
              <Label text="Enter your name:" />
              <Input placeholder="Enter text" style={{ width: 200 }} />
              <Checkbox checked={isChecked} onChange={setIsChecked} />
              <RadioButton initialSelected={isSelected} onToggle={setIsSelected} />
              <Card>
                <Text>This is a card component</Text>
              </Card>
              <TextArea placeholder="Enter text here" style={{ width: 200 }} />
              <ToggleSwitch initialValue={isToggled} onToggle={setToggled} label="Toggle Switch" />
              <Dropdown
                options={[
                  "Option 1",
                  "Option 2",
                  "Option 3",
                  "Option 4",
                  "Option 5",
                  "Option 6",
                  "Option 7",
                  "Option 8",
                  "Option 9",
                  "Option 10"
                ]}
                value={selectedOption}
                onSelect={setSelectedOption}
                label="Dropdown"
                placeholder="Choose an option"
              />
              <Text>Selected: {selectedOption}</Text>
              <CustomSlider
                value={50}
                onValueChange={(value) => console.log('Slider Value:', value)}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#007bff"
                maximumTrackTintColor="#ccc"
                thumbTintColor="#007bff"
              />
              <Stepper
                value={stepperValue}
                onValueChange={setStepperValue}
                step={1}
                minimumValue={0}
                maximumValue={10}
              />
            </>
          )
        }
      ]
    },
    {
      title: 'Navigation Components',
      data: [
        {
          key: 'navigation',
          render: () => (
            <>
              <Button onPress={() => setModalVisible(true)}>Show Modal</Button>
              <Modal visible={isModalVisible} onClose={() => setModalVisible(false)}>
                <Text>This is a modal</Text>
              </Modal>
              <Tabs
                tabs={tabs}
                selectedTab={selectedTab}
                onSelect={setSelectedTab}
              />
              <Accordion
                sections={accordionSections}
                expandedSection={expandedSection}
                onToggle={handleToggle}
              />
              <Breadcrumbs
                items={breadcrumbItems}
                currentItem={currentBreadcrumb}
                onSelect={setCurrentBreadcrumb}
              />
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
              <Drawer
                items={drawerItems}
                selectedItem={selectedDrawerItem}
                onSelect={setSelectedDrawerItem}
              />
            </>
          ),
        },
      ],
    },
    {
      title: 'Feedback Components',
      data: [
        {
          key: 'feedback',
          render: () => (
            <>
              <Button onPress={showToast}>Show Toast</Button>
              <Toast
                message="This is a toast message!"
                visible={toastVisible}
                onClose={() => setToastVisible(false)}
              />
              <Tooltip content="This is a tooltip!">
                <Text>Hover over me!</Text>
              </Tooltip>
              <Carousel
                items={carouselItems}
                currentIndex={carouselIndex}
                onIndexChange={setCarouselIndex}
              />
              <ProgressBar progress={progress} />
              <Badge>{badgeCount}</Badge>
              <SkeletonLoader width={200} height={20} />
            </>
          ),
        },
      ],
    },
    {
      title: 'Data Display Components',
      data: [
        {
          key: 'data-display',
          render: () => (
            <>
              <Avatar imageUrl="https://randomuser.me/api/portraits/men/1.jpg" size={50} />
              <Chip label="Example Chip" onPress={handleChipPress} />
              <List
                items={listItems.map(item => (
                  <Typography variant="body1">{item}</Typography>
                ))}
              />
              <Divider />
              <Table
                data={tableData}
                columns={tableColumns}
              />
            </>
          ),
        },
      ],
    },
    {
      title: 'Utility Components',
      data: [
        {
          key: 'utility',
          render: () => (
            <>
            <Card style={styles.typographyCard}>
              <Typography variant="h4" style={styles.cardTitle}>Typography System</Typography>
              <View style={styles.typographyDemo}>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="subtitle1">Subtitle 1</Typography>
                <Typography variant="body1">Body Text 1</Typography>
                <Typography variant="caption">Caption Text</Typography>
              </View>
            </Card>
            
            <Card>
              <Typography variant="h4">Loading States</Typography>
                  <Spinner size="large" variant="primary" label="Large" />
                  <Spinner size="small" variant="success" label="Small" />
            </Card>
            
            <Grid.Container style={styles.gridExample}>
              <Grid.Row>
                <Grid.Col size={12}>
                  <Typography variant="h4" style={styles.gridTitle}>Grid Layout System</Typography>
                </Grid.Col>
              </Grid.Row>
              
              {/* Two columns example */}
              <Grid.Row spacing={2}>
                {[1, 2].map((num) => (
                  <Grid.Col key={num} size={6}>
                    <Card style={styles.gridCard}>
                      <Typography 
                        variant="body1"
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={styles.gridText}
                      >
                        Column {num}
                      </Typography>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid.Row>

              {/* Three columns example */}
              <Grid.Row spacing={2} style={{ marginTop: 16 }}>
                {[1, 2, 3].map((num) => (
                  <Grid.Col key={num} size={4}>
                    <Card style={styles.gridCard}>
                      <Typography 
                        variant="body1"
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={styles.gridText}
                      >
                        Column {num}
                      </Typography>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid.Row>
            </Grid.Container>
            </>
            
          ),
        },
      ],
    },
  ];

  return (
    <BaapSafeArea 
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      {sampleSections.map((section) => (
        <View key={section.title}>
          <Typography variant="h3">{section.title}</Typography>
          {section.data.map((item) => (
            <View key={item.key} style={styles.sectionContent}>
              {item.render()}
            </View>
          ))}
        </View>
      ))}
    </BaapSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  gridExample: {
    marginVertical: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  gridCard: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    height: 80,
  },
  gridTitle: {
    marginBottom: 16,
    textAlign: 'center',
  },
  gridText: {
    textAlign: 'center',
    width: '100%',
  },
  typographyCard: {
    marginBottom: 16,
  },
  cardTitle: {
    marginBottom: 16,
    textAlign: 'center',
  },
  typographyDemo: {
    paddingHorizontal: 16,
  },
});

export default SampleScreen; 